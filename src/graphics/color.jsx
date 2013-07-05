/**
 * color.jsx
 */

class Color {
    static const RED = new Color(255, 0, 0, 1.0);
    static const GREEN = new Color(0, 255, 0, 1.0);
    static const BLUE = new Color(0, 0, 255, 1.0);
    static const BLACK = new Color(0, 0, 0, 1.0);
    static const WHITE = new Color(255, 255, 255, 1.0);

    var red = 0;
    var green = 0;
    var blue = 0;
    var alpha = 0;

    function constructor(red: number, green: number, blue: number, alpha: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
}