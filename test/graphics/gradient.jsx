import 'test-case.jsx';

import '../../src/graphics/gradient.jsx';
import '../../src/graphics/color.jsx';

class _Test extends TestCase {

    function test_constructor(): void {
        var v = new LinearGradient(0, 0, 256, 0);
        v.addColorStop(0, Color.RED);
    }

}
