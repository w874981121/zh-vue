var animation = require("./animate.js");
require('./barrage.css')
module.exports = {
	install(Vue) {
		Vue.prototype.$start = (barrage_target, section) => {
			barrage_target.style.overflow = "hidden";
			barrage_target.style.position = "relative";
			return this.send.bind(this, barrage_target, section);
		};
	},
	send: (...args) => {
		const [target, section = [0, 1, 2], options] = args, {
			imgUrl,
			name,
			text,
			colorname,
			classname,
			speed
		} = options,
		barrage = document.createElement("div"),
			imgbox = document.createElement("div"),
			textbox = document.createElement("div"),
			nametext = document.createElement("p"),
			dectext = document.createElement("p"),
			max = Math.max(...section),
			min = Math.min(...section);

		if (classname === "halloffamebarrage") {
			imgbox.classList.add("imgbox");
			textbox.classList.add("textbox");
			colorname && textbox.classList.add(colorname);
			nametext.classList.add("nametext");
			dectext.classList.add("dectext");
			var _img = new Image();
			_img.src = imgUrl;
			nametext.innerText = name;
			dectext.innerText = text;
			imgbox.appendChild(_img)
			textbox.appendChild(nametext)
			textbox.appendChild(dectext);
			barrage.appendChild(imgbox);
			barrage.appendChild(textbox);
		} else {
			let randomNume = Math.random();
			if (JSON.stringify(randomNume).length % 2) {
				barrage.classList.add("color1")
			} else {
				barrage.classList.add("color2")
			}
			barrage.innerHTML = text;
		}

		barrage.classList.add("barrage");
		classname && barrage.classList.add(classname);
		barrage.style.left = (target.offsetWidth) + "px";
		target.appendChild(barrage);
		if (max !== min) {
			let randomNume = Math.random();
			barrage.style.top = randomNume * (target.offsetHeight - 60) + "px";
		} else {
			barrage.style.top = Math.random() * (target.offsetHeight - barrage.offsetHeight) + "px";
		}

		animation(barrage, "left", target.offsetWidth + barrage.offsetWidth, speed, function () {
			barrage.parentNode.removeChild(barrage);
		})

	}
}