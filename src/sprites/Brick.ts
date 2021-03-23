import { Vector } from "../types";

export class Brick {
  private brickImage: HTMLImageElement = new Image();

  constructor(
    private brickWidth: number,
    private brickHeight: number,
    private position: Vector,
    private brickEnergy: number,
    image: string
  ) {
    this.brickEnergy = brickEnergy;
    this.brickHeight = brickHeight;
    this.brickWidth = brickWidth;
    this.position = position;
    this.brickImage.src = image;
  }

  // Getters
  public get width(): number {
    return this.brickWidth;
  }

  public get height(): number {
    return this.brickHeight;
  }

  public get pos(): Vector {
    return this.position;
  }
  public get image(): HTMLImageElement {
    return this.brickImage;
  }

  public get energy(): number {
    return this.brickEnergy;
  }

  // Setter
  public set energy(v: number) {
    this.brickEnergy = v;
  }
}
