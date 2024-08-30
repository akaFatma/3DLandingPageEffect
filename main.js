import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Threeasy from 'threeasy';

const app = new Threeasy(THREE,{alpha : true});

var loader = new GLTFLoader();
let modelUrl = './public/free_car_001.gltf'


loader.load(modelUrl,function(gltf){
    console.log(gltf.scene);
    gltf.scene.scale.x = .4
    gltf.scene.scale.y = .3
    gltf.scene.scale.z = .4
    

    gltf.scene.rotation.x = 1
    gltf.scene.rotation.y = .4
    gltf.scene.rotation.z = 0
   

    app.scene.add( gltf.scene );
    window.addEventListener('scroll', onScroll);

    function onScroll() {
        const scrollY = window.scrollY;
        const rotationSpeed = 0.01;
        gltf.scene.rotation.x = scrollY * rotationSpeed;
        gltf.scene.rotation.y = scrollY * rotationSpeed;
      }

})
const light = new THREE.AmbientLight( 0xffffff ); // soft white light
light.intensity = 3;

app.scene.add(light);
