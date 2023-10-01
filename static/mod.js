const canvas = document.getElementById("picture");
const ctx = canvas.getContext("2d");

const fileInput = document.getElementById("file");
fileInput.onchange = function(e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function(e) {
                let image = new Image();
                image.src = e.target.result;
                image.onload = function(e) {
                        canvas.width = image.width;
                        canvas.height = image.height;
                        ctx.drawImage(image,0,0);
                }
        }
};

const gridButton = document.getElementById("grid");
grid.onclick = (e) => {
        const width = canvas.width;
        const height = canvas.height;
        const shorter = width<height ? width : height;
        const size = shorter/10;
        ctx.strokeStyle = 'red';
        for (let i = size; i<height; i+=size) {
                ctx.beginPath();
                ctx.moveTo(0,i);
                ctx.lineTo(width,i);
                ctx.stroke();
        }
        for (let i = size; i<width; i+=size) {
                ctx.beginPath();
                ctx.moveTo(i,0);
                ctx.lineTo(i,height);
                ctx.stroke();
        }
};

