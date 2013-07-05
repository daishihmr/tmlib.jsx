/*
 * radialgradient.jsx
 */

import "js/web.jsx";
import "color.jsx";

abstract class Gradient {
    function addColorStop(offset: number, color: Color): void {
    }

    function addColorStopList(): void {
    }
}

class LinearGradient extends Gradient {

    var gradient: CanvasGradient;

    function constructor(x: number, y: number, width: number, height: number) {
        var dummyCanvas = dom.window.document.createElement("canvas") as HTMLCanvasElement;
        var dummyContext = dummyCanvas.getContext('2d') as CanvasRenderingContext2D;
        this.gradient = dummyContext.createLinearGradient(x, y, width, height);
    }


}