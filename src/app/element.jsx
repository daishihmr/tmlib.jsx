/*
 *
 */


/**
 * element class
 */
class Element {
    var children: Element[];
//    var update = null: function(app: variant): void;
    
    /**
     * constructor
     */
    function constructor() {
        this.children = []: Element[];
    }
    
    function addChild(child: Element): void {
        this.children.push(child);
    }
    
    function update(app: variant): void {
        
    }
    
    function _update(app: variant): void {
        if (this.update) {
            this.update(app);
        }
        if (this.children.length > 0) {
            this.children.forEach((elm) -> {
                elm._update(app);
            });
        }
    }
}

