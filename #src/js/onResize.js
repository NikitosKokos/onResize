class OnResize extends Code {
    constructor(options){
        super({
            size: options.size,
            code: options.code,
            onMinSize: (options.onMinSize == undefined) ? false: options.onMinSize,
            heightResize: (options.heightResize == undefined) ? false: options.heightResize,
        })
        let isSize = false;
        console.log(this.heightResize);
        const mobileCode = () =>{

            const minHeight = () => {
                    if(this.size < window.innerHeight && isSize === false){
                        this.code();
                        isSize = true;
                    }else if(this.size > window.innerHeight && isSize === true){
                        isSize = false;
                    }
            };
            const minWidth = () => {
                if(this.size < window.innerWidth && isSize === false){
                    this.code();
                    isSize = true;
                }else if(this.size > window.innerWidth && isSize === true){
                    isSize = false;
                }
            };
            const maxHeight = () => {
                if(this.size > window.innerHeight && isSize === false){
                    this.code();
                    isSize = true;
                }else if(this.size < window.innerHeight && isSize === true){
                    isSize = false;
                }
            };
            const maxWidth = () => {
                if(this.size > window.innerWidth && isSize === false){
                    this.code();
                    isSize = true;
                }else if(this.size < window.innerWidth && isSize === true){
                    isSize = false;
                }
            };


            if(this.onMinSize == true){
                if(this.heightResize == true){
                    minHeight();
                }else{
                    minWidth();
                }
            }else{
                if(this.heightResize == true){
                    maxHeight();
                }else{
                    maxWidth();
                }
            }
        }
        mobileCode();
        window.addEventListener("resize", mobileCode);
    }
}
