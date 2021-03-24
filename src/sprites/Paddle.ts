import { Vector } from "../types";

export class Paddle {
  private paddleImage: HTMLImageElement = new Image();
  private moveLeft: boolean;
  private moveRight: boolean;

  constructor(
    private speed: number,
    private paddleWidth: number,
    private paddleHeight: number,
    private position: Vector,
    image: string
  ) {
    this.speed = speed;
    this.paddleHeight = paddleHeight;
    this.paddleWidth = paddleWidth;
    this.position = position;
    this.moveRight = false;
    this.moveLeft = false;
    this.paddleImage.src = image;

    //Event listeners
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }
  // Getters
  public get width(): number {
    return this.paddleWidth;
  }

  public get height(): number {
    return this.paddleHeight;
  }

  public get pos(): Vector {
    return this.position;
  }

  public get image(): HTMLImageElement {
    return this.paddleImage;
  }

  public get isMovingLeft(): boolean {
    return this.moveLeft;
  }

  public get isMovingRight(): boolean {
    return this.moveRight;
  }

  movePaddle(): void {
    if (this.moveLeft) this.pos.x -= this.speed;
    if (this.moveRight) this.pos.x += this.speed;
  }

  handleKeyUp = (e: KeyboardEvent): void => {
    if (e.code === "ArrowLeft" || e.key === "ArrowLeft") this.moveLeft = false;
    if (e.code === "ArrowRight" || e.key === "ArrowRight")
      this.moveRight = false;
  };

  handleKeyDown = (e: KeyboardEvent): void => {
    if (e.code === "ArrowLeft" || e.key === "ArrowLeft") this.moveLeft = true;
    if (e.code === "ArrowRight" || e.key === "ArrowRight")
      this.moveRight = true;
  };
}
