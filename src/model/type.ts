import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { CommonModelOptions } from "./../type";

export interface LoadGLTFParams {
  modelPath: string;
  options?: CommonModelOptions;
  callback?: (gltf: GLTF, model: THREE.Group<THREE.Object3DEventMap>) => void;
}
