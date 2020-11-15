class OnResize{
    constructor(options){
        // options
            this.size = options.size;
            this.code = options.code;
            this.onMinSize = (options.onMinSize == undefined) ? false: options.onMinSize;
            this.heightResize = (options.heightResize == undefined) ? false: options.heightResize;

        
        let isSize = false;
        // main function
        const mobileCode = () =>{
            // condition,condition2 - conditions in function showCode
            const showCode = (condition,condition2) => {
                if(condition){
                    this.code();
                    isSize = true;
                }else if(condition2){
                    isSize = false;
                }
            };
            // min
            const minHeight = this.size < window.innerHeight && isSize === false;
            const minHeight2 = this.size > window.innerHeight && isSize === true;
            const minWidth = this.size < window.innerWidth && isSize === false;
            const minWidtht2 = this.size > window.innerWidth && isSize === true;
            // max
            const maxHeight = this.size > window.innerHeight && isSize === false;
            const maxHeight2 = this.size < window.innerHeight && isSize === true;
            const maxWidth = this.size > window.innerWidth && isSize === false;
            const maxWidth2 = this.size < window.innerWidth && isSize === true;


            if(this.onMinSize == true){
                if(this.heightResize == true){
                    showCode(minHeight,minHeight2);
                }else{
                    showCode(minWidth,minWidth2);
                }
            }else{
                if(this.heightResize == true){
                    showCode(maxHeight,maxHeight2);
                }else{
                    showCode(maxWidth,maxWidth2);
                }
            }
            console.log('res');
        }
        const resize = () =>{
            window.addEventListener("resize", mobileCode);
        }
        const removeResize = () =>{
            window.removeEventListener("resize", mobileCode);
        }
        mobileCode();
    }
}

// const hero = new OnResize({
//     size: 767,
//     code: () => {
//         document.querySelector('.hero').textContent = '767!!!';
//     },
// })