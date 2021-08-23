
const BinaryShifter = {

    createBitNode(setBit, defaultValue) {
        const node = document.createElement("input");
        node.type = "checkbox";

        node.checked = defaultValue;

        node.addEventListener("click", (ev) => {
            setBit(node.checked);
        })
        return node;
    },

    bitArrayToValue(array, signed = false) {
        let ret = 0;

        for (let i = 0; i < array.length; i++) {
            ret |= (!!array[i]) << i;
        }

        if (signed) ret = ret << 24 >> 24;

        return ret;
    },

    applyTo(node) {
        node.bitWidth = +(node.getAttribute("bits") || 8);
        node.isSigned = node.hasAttribute("signed");

        node.bitNodes = [];

        node.emitChange = () => {
            const value = node.value;
            node.setAttribute("value", value);
            node.style.animation = "";
            node.offsetHeight;
            node.style.animation = "pulsecolor 250ms";
            node.dispatchEvent(new CustomEvent(
                "valuechange", 
                { detail: value }
            ));
        }

        for (let i = 0; i < node.bitWidth; i++) {
            const bitNode = BinaryShifter.createBitNode((value) => {
                node.emitChange();
            });

            bitNode.setAttribute("bitvalue", (1 << (node.bitWidth - 1 - i)))

            node.bitNodes.push(bitNode);
            node.appendChild(bitNode);
        }

        node.bitNodeWidth = 20;

        node.shiftRight = () => {

            for (let i = node.bitWidth - 1; i > 0; i--) {
                node.bitNodes[i].checked = node.bitNodes[i - 1].checked;
            }

            node.bitNodes[0].checked &&= node.isSigned;

            node.emitChange();

            //node.value >>>= 1;

            //if (node.isSigned) node.value |= leftBit << (node.bitWidth - 1); 
        }

        node.shiftLeft = () => {
            for (let i = 0; i < node.bitWidth - 1; i++) {
                node.bitNodes[i].checked = node.bitNodes[i + 1].checked;
            }

            node.bitNodes[node.bitWidth - 1].checked = false;

            node.emitChange();
        }

        node.addEventListener("mousedown", (ev) => {
            if (ev.buttons & 1) {
                node.startX = ev.pageX - node.offsetLeft;
            }
        });

        node.addEventListener("mousemove", (ev) => {
            if (ev.buttons & 1) {
                ev.preventDefault();
                const x = ev.pageX - node.offsetLeft;
                const walk = x - node.startX;
                if (Math.abs(walk) > node.bitNodeWidth) {
                    const direction = Math.sign(walk);
                    node.startX += node.bitNodeWidth * direction;

                    if (direction > 0) node.shiftRight()
                    else node.shiftLeft();
                }
            }
        });

        node.addEventListener("dblclick", (ev) => {
            let newValue = NaN;
            while (isNaN(newValue)) {
                const promptResult = prompt("Enter a new value:");
                if (promptResult === null) return;
                newValue = parseFloat(promptResult);
            }
            node.value = newValue;
        })

        Object.defineProperty(node, "value", {
            get: () => {
                let ret = 0;

                for (let i = 0; i < node.bitWidth; i++) {
                    ret |= node.bitNodes[i].checked << (node.bitWidth - 1 - i);
                }

                if (node.isSigned) ret = ret > (1 << (node.bitWidth - 1)) - 1 ? -ret : ret;

                return ret;
            },
            set(newValue) {
                //if (node.isSigned) newValue = newValue > (1 << (node.bitWidth - 1)) - 1 ? -newValue : newValue;

                for (let i = 0; i < node.bitWidth; i++) {
                    node.bitNodes[i].checked = newValue & (1 << (node.bitWidth - 1 - i));
                }
                node.emitChange();
            },
        })

        node.value = +(node.getAttribute("value") || 0);
    }

}
