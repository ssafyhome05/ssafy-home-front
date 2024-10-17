<template>
    <div class="header">

        <div class="title">SSAFYHOME</div>

        <div class="select-box">
            <!-- <form class="d-flex" method="post" action=""> -->
                <select class="form-select select" id="sido" name="sido" @change="getGugun">
                    <option selected>시/도선택</option>
                </select>
                <select class="form-select select" id="gugun" name="gugun" @change="getDong">
                    <option selected>구/군선택</option>
                </select>
                <select class="form-select select" id="dong" name="dong">
                    <option selected>동선택</option>
                </select>
                <!-- <select class="form-select select" id="year" name="year" @change="getMonth">
                    
                </select>
                <select class="form-select select" id="month" name="month">
                    <option selected>매매월선택</option>
                </select> -->
                <!-- <input class="btn btn-primary search fw-bold" value="검색" @click="validateForm" style="--bs-btn-padding-x: 2rem; --bs-btn-font-size: 1rem;"> -->
                <a href="#" class="btn-3d blue" @click="validateForm">Search</a>
            <!-- </form> -->
        </div>
    </div>   

    <div class="main-container bg-transparent" id="map">

    </div>
</template>
<script>
    import axios from 'axios';
    import proj4 from 'proj4';
    import { toRaw } from 'vue';
    import emdData from '../assets/resources/geoJson.json';


    export default{
        name: "KakaoMap",
        data() {
            return {
                kakaoMap: null,
                // marker: null,
                markers: [],
                polygon: null,
                date: new Date(),
                houses: [],
            };
        },
        mounted() {
            // kakao api 스크립트 소스 불러오기 및 지도 출력
            if (window.kakao && window.kakao.maps) {
                this.loadMap();
            } else {
                this.loadScript();
            }
            
            // 매매년도
            // this.getYear();

            // 시도얻기
            this.sendRequest("sido", "*00000000");

            // // 시도 선택
            // document.querySelector("#sido").addEventListener("change", this.getGugun);

            // // 구군 선택
            // document.querySelector("#gugun").addEventListener("change", this.getDong);
            
            // // 년도 선택
            // document.querySelector("#year").addEventListener("change", this.getMonth);
        },
        methods: {
            // kakao api 불러오기
            loadScript() {
                const script = document.createElement("script");
                script.src =
                    "//dapi.kakao.com/v2/maps/sdk.js?appkey=e7cf7813e371ea93a852ee8a10e1b8a5&autoload=false&libraries=services"; 
                script.onload = () => window.kakao.maps.load(this.loadMap); 

                document.head.appendChild(script);
            },
            // 맵 출력하기
            loadMap() {
                const container = document.getElementById("map"); 
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), 
                    level: 3
                };

                this.kakaoMap = new window.kakao.maps.Map(container, options); 
                this.loadMaker();
                // this.createCircle();
            },
            // 지정한 위치에 마커 불러오기
            loadMaker() {
                const markerPosition = new window.kakao.maps.LatLng(
                    33.450701,
                    126.570667
                );
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                });
                this.markers.push(marker);

                // this.markers.setMap(this.kakaoMap);
                this.markers[0].setMap(this.kakaoMap);
            },

            createCircle(){
                // 지도에 표시할 원을 생성합니다
                var circle = new window.kakao.maps.Circle({
                    center : new window.kakao.maps.LatLng(33.450701, 126.570667),  // 원의 중심좌표 입니다 
                    radius: 500, // 미터 단위의 원의 반지름입니다 
                    strokeWeight: 1, // 선의 두께입니다 
                    strokeColor: '#75B8FA', // 선의 색깔입니다
                    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'solid', // 선의 스타일 입니다
                    fillColor: '#CFE7FF', // 채우기 색깔입니다
                    fillOpacity: 0.5  // 채우기 불투명도 입니다   
                }); 

                // 지도에 원을 표시합니다 
                circle.setMap(this.kakaoMap); 
            },

            // 매매년도
            getYear(){
                let date = this.date;

                let yearEl = document.querySelector("#year");
                let yearOpt = `<option value="">매매년도선택</option>`;
                let year = date.getFullYear();
                for (let i = year; i > year - 20; i--) {
                    yearOpt += `<option value="${i}">${i}년</option>`;
                }
                yearEl.innerHTML = yearOpt;
            },

            sendRequest(selid, regcode) {
                const url = "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes";
                let params = "regcode_pattern=" + regcode + "&is_ignore_zero=true";
                fetch(`${url}?${params}`)
                .then((response) => response.json())
                .then((data) => this.addOption(selid, data));
            },

            addOption(selid, data) {
                let opt = ``;
                this.initOption(selid);
                switch (selid) {
                    case "sido":
                        opt += `<option value="">시/도선택</option>`;
                        data.regcodes.forEach(function (regcode) {
                            opt += `<option value="${regcode.code}">${regcode.name}</option>`;
                        });
                        break;
                    case "gugun": {
                        opt += `<option value="">구/군선택</option>`;
                        for (let i = 0; i < data.regcodes.length; i++) {
                            if (i != data.regcodes.length - 1) {
                                if (
                                    data.regcodes[i].name.split(" ")[1] == data.regcodes[i + 1].name.split(" ")[1] &&
                                    data.regcodes[i].name.split(" ").length != data.regcodes[i + 1].name.split(" ").length
                                ) {
                                    data.regcodes.splice(i, 1);
                                    i--;
                                }
                            }
                        }
                        let name = "";
                        data.regcodes.forEach(function (regcode) {
                            if (regcode.name.split(" ").length == 2) name = regcode.name.split(" ")[1];
                            else name = regcode.name.split(" ")[1] + " " + regcode.name.split(" ")[2];
                            opt += `<option value="${regcode.code}">${name}</option>`;
                        });
                        break;
                    }
                    case "dong": {
                        opt += `<option value="">동선택</option>`;
                        let idx = 2;
                        data.regcodes.forEach(function (regcode) {
                            if (regcode.name.split(" ").length != 3) idx = 3;
                            opt += `<option value="${regcode.code}">${regcode.name.split(" ")[idx]}</option>`;
                        });
                        break;
                    }
                }
                document.querySelector(`#${selid}`).innerHTML = opt;
            },

            initOption(selid) {
                let options = document.querySelector(`#${selid}`);
                let opt = '';
                // options.length = 0;
                switch(selid){
                    case "gugun": {
                        opt += `<option value="">구/군선택</option>`;
                        options.innerHTML = opt;
                        break;
                    }
                    case "dong": {
                        opt += `<option value="">동선택</option>`;
                        options.innerHTML = opt;
                        break;
                    }
                }
                // let len = options.length;
                // for (let i = len - 1; i >= 0; i--) {
                //   options.remove(i);
                // }
            },

            // 시도가 선택되면 구군정보 얻어오기
            getGugun(e){
                if (e.target.options.selectedIndex) {
                    let regcode = e.target.options[e.target.options.selectedIndex].value.substr(0, 2) + "*00000";
                    this.sendRequest("gugun", regcode);
                } else {
                    this.initOption("gugun");
                    this.initOption("dong");
                }
            },

            // 구군이 선택되면 동정보 얻어오기
            getDong(e){
                if (e.target.options.selectedIndex) {
                    let regcode = e.target.options[e.target.options.selectedIndex].value.substr(0, 5) + "*";
                    this.sendRequest("dong", regcode);
                }else{
                    this.initOption("dong");
                }
            },

            // 월
            getMonth(e){
                let month = this.date.getMonth() + 1;
                let monthEl = document.querySelector("#month");
                let monthOpt = `<option value="">매매월선택</option>`;
                // let yearSel = document.querySelector("#year");
                let m = e.target.options[e.target.options.selectedIndex].value == this.date.getFullYear() ? month : 13;
                for (let i = 1; i < m; i++) {
                    monthOpt += `<option value="${i < 10 ? "0" + i : i}">${i}월</option>`;
                }
                monthEl.innerHTML = monthOpt;
            },
            
            checkFormCompletion() {
                // 시도, 구군, 동 모두 선택되었는지 확인
                this.isFormComplete = this.selectedSido !== "" && this.selectedGugun !== "" && this.selectedDong !== "";
            },

            validateForm() {
                const sido = document.getElementById("sido").value;
                const gugun = document.getElementById("gugun").value;
                const dong = document.getElementById("dong").value;

                if (!sido || !gugun || !dong) {
                    alert("시/도, 구/군, 동을 모두 선택해주세요.");
                    return;
                }

                this.searchHouse(dong);

                // 필요한 경우 여기서 form을 제출
                // e.target.submit();   // 주석 해제 시 실제 폼 제출 가능
            },

            async searchHouse(dong){            
                alert("검색 시작");
                try {
                    const response = await axios.post('http://localhost:8081/house', null, {
                        params: {
                            dong: dong,
                        }
                    });// 서버의 API URL
                    this.houses = response.data;  // 서버로부터 받은 데이터를 houses에 저장
                    
                    // 마커 초기화
                    this.clearMarkers();

                    var geocoder = new window.kakao.maps.services.Geocoder();
                    var sidoStr = document.querySelector("#sido option:checked").textContent;
                    var gugunStr = document.querySelector("#gugun option:checked").textContent;
                    var dongStr = document.querySelector("#dong option:checked").textContent;
                    var addrStr = sidoStr + " " + gugunStr + " " + dongStr;

                    geocoder.addressSearch(addrStr, (result, status) => {
                        if(status === window.kakao.maps.services.Status.OK){
                            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                            this.kakaoMap.setCenter(coords);
                        }
                    });
                    
                    this.addNeighborhoodPolygon(dongStr);

                    for (let i = 0; i < this.houses.length; i ++) {
                        const marker = new window.kakao.maps.Marker({
                            map: this.kakaoMap, // 마커를 표시할 지도
                            position: new window.kakao.maps.LatLng(this.houses[i].latitude, this.houses[i].longitude),
                        });

                        const infowindow = new window.kakao.maps.InfoWindow({
                            content: this.houses[i].aptNm,
                        });
                        
                        // 마커에 mouseover, mouseout click event 등록
                        window.kakao.maps.event.addListener(marker, 'mouseover', 
                                    this.makeInfoWindow(toRaw(this.kakaoMap), marker, infowindow));
                        window.kakao.maps.event.addListener(marker, 'mouseout', 
                                    this.removeInfoWindow(infowindow));
                        const aptSeq = this.houses[i].aptSeq; // aptSeq를 변수에 저장
                        window.kakao.maps.event.addListener(marker, 'click', () => {
                            this.clickMarker(aptSeq); // clickMarker에 aptSeq 전달
                        });
                        // 배열에 마커 저장
                        this.markers.push(marker);                        
                    }
                } catch (error) {
                    console.error("데이터 가져오기에 실패했습니다:", error);
                }
            },

            // 이전 마커 초기화
            clearMarkers() {
                for (var i = 0; i < this.markers.length; i++) {
                    this.markers[i].setMap(null); // 지도에서 마커 제거
                }
                this.markers = []; // 마커 배열 초기화
            },

            // 마커 infowindow 표시
            makeInfoWindow(map, marker, infowindow){
                return () => {
                    infowindow.open(map, marker);
                };
            },

            // 마커 infowindow 숨기기
            removeInfoWindow(infowindow){
                return () => {
                    infowindow.close();
                };
            },

            clickMarker(aptSeq) {
                console.log("click " + aptSeq);
                // 여기에 aptSeq를 사용하는 추가 로직을 작성할 수 있습니다.
            },


            // 해당 동 Polygon 구역 표시
            async findNeighborhoodCoordinates(dong){
                const data = await emdData;

                for(const feature of data.features){
                    if(dong === feature.properties.EMD_KOR_NM){
                        return feature.geometry.coordinates;
                    }
                }

                return false;
            },

            async addNeighborhoodPolygon(dong){
                const coordinates = await this.findNeighborhoodCoordinates(dong);
                const utmk =
                    "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs";
                const wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
                const transformer = proj4(utmk, wgs84);
                const polygonPath = [];
                if(this.polygon != null){
                    this.polygon.setMap(null);
                }
                coordinates.forEach((coordinateArray) => {
                    coordinateArray.forEach((coordinate) => {
                        const [longi, lati] = transformer.forward(coordinate);
                        polygonPath.push(new window.kakao.maps.LatLng(lati, longi));
                    });
                });

                this.addPolygon(polygonPath);

            },

            addPolygon(polygonPath){
                this.polygon = new window.kakao.maps.Polygon({
                    path: polygonPath,
                    strokeWeight: 1, // 선의 두께입니다 
                    strokeColor: '#75B8FA', // 선의 색깔입니다
                    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'solid', // 선의 스타일 입니다
                    fillColor: '#CFE7FF', // 채우기 색깔입니다
                    fillOpacity: 0.5  // 채우기 불투명도 입니다  
                });

                this.polygon.setMap(this.kakaoMap);
            },
        }
    }
    
</script>