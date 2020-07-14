class MenuComponent extends HTMLDivElement
{
    constructor()
    {
        super();
        this.optionsList;
        this.inMenuList;
        this.link1;
        this.link2;
        this.homebtn;
        this.optionsbtn;
        this.projectsbtn;
        this.option1;
        this.option2;
        this.option3;
        this.option4;
        this.state1 = false;
        this.state2 = false;
        this.Do();
    }

    Do()
    {
        this.className = "navbar";
        this.id = "menu";
        this.style.overflow = "hidden";
        this.style.backgroundColor = "gray";
        this.style.fontFamily = "Arial";
        this.style.boxShadow = "12px 15px 8px 1px black";
        this.homebtn = document.createElement("a");
        this.homebtn.style.color = "white";
        this.homebtn.id = "home";
        this.homebtn.style.float = "left";
        this.homebtn.style.textAlign = "center";
        this.homebtn.style.fontSize = "16px";
        this.homebtn.style.padding = "18px";
        this.homebtn.style.textDecoration = "none";
        this.appendChild(this.homebtn);
        let inMenu = document.createElement("div");
        inMenu.id = "inmenu";
        inMenu.className = "dropdown";
        inMenu.style.overflow = "hidden";
        inMenu.style.border = "none";
        inMenu.style.outline = "none";
        inMenu.style.backgroundColor = "inherit";
        inMenu.style.padding = "16px";
        this.appendChild(inMenu);
        this.projectsbtn = document.createElement("button");
        this.projectsbtn.id = "button2";
        this.projectsbtn.style.float = "left";
        this.projectsbtn.style.textAlign = "center";
        this.projectsbtn.style.border = "none";
        this.projectsbtn.style.outline = "none";
        this.projectsbtn.style.backgroundColor = "inherit";
        this.projectsbtn.style.color = "white";
        this.projectsbtn.style.fontSize = "16px";
        inMenu.appendChild(this.projectsbtn);
        this.inMenuList =  document.createElement("div");
        this.inMenuList.id = "inmenulist";
        this.inMenuList.className = "dropdown-content";
        this.inMenuList.style.display = "none";
        this.inMenuList.style.position = "absolute";
        this.inMenuList.style.minWidth = "80px";
        this.inMenuList.style.backgroundColor = "black";
        this.inMenuList.style.padding = "10px"
        this.inMenuList.style.zIndex = "1";
        inMenu.appendChild(this.inMenuList);
        this.link1 = document.createElement("a");
        this.link1.id = "link1";
        this.inMenuList.appendChild(this.link1);
        this.link2 = document.createElement("a");
        this.link2.id = "link2";
        this.inMenuList.appendChild(this.link2);
        this.styleIT(this.link1, this.link2);
        this.optionsbtn = document.createElement("button");
        this.optionsbtn.style.float = "left";
        this.optionsbtn.id = "button3";
        this.optionsbtn.style.textAlign = "center";
        this.optionsbtn.style.border = "none";
        this.optionsbtn.style.outline = "none";
        this.optionsbtn.style.backgroundColor = "inherit";
        this.optionsbtn.style.color = "white";
        this.optionsbtn.style.fontSize = "16px";
        inMenu.appendChild(this.optionsbtn);
        this.optionsList = document.createElement("div");
        this.optionsList.id = "optionlist";
        this.optionsList.className = "dropdown-content";
        this.optionsList.style.display = "none";
        this.optionsList.style.position = "absolute";
        this.optionsList.style.minWidth = "80px";
        this.optionsList.style.backgroundColor = "black";
        this.optionsList.style.padding = "10px"
        this.optionsList.style.zIndex = "1";
        inMenu.appendChild(this.optionsList);
        this.option1 = document.createElement("button");
        this.option1.id = "option1";
        this.option1.style.border = "none";
        this.option1.style.backgroundColor = "inherit";
        this.optionsList.appendChild(this.option1);
        this.option3 = document.createElement("button");
        this.option3.id = "option2";
        this.option3.style.border = "none";
        this.option3.style.backgroundColor = "inherit";
        this.optionsList.appendChild(this.option3);
        this.option2 = document.createElement("button");
        this.option2.id = "option3";
        this.option2.style.border = "none";
        this.option2.style.backgroundColor = "inherit";
        this.optionsList.style.position = "absolute";
        this.optionsList.appendChild(this.option2);
        this.option4 = document.createElement("button");
        this.option4.id = "option4";
        this.option4.style.border = "none";
        this.option4.style.backgroundColor = "inherit";
        this.optionsList.appendChild(this.option4);
        this.styleIT(this.option1, this.option3);
        this.styleIT(this.option2, this.option4);
        this.optionsbtn.onclick = () => 
        {
            if (!this.state2 && !this.state1)
            {
                this.state2 = true;
                this.show(this.optionsList);
            }
            else if (!this.state2 && this.state1)
            {
                this.state1 = false;
                this.state2 = true;
                this.hide(this.inMenuList);
                this.show(this.optionsList);
            }
            else if (this.state2)
            {
                this.state2 = false;
                this.hide(this.optionsList);
            }
        }
        this.projectsbtn.onclick = () => 
        {
            if (!this.state1 && !this.state2)
            {
                this.state1 = true;
                this.show(this.inMenuList);
            }
            else if (!this.state1 && this.state2)
            {
                this.state2 = false;
                this.state1 = true;
                this.show(this.inMenuList);
                this.hide(this.optionsList);
            }
            else if (this.state1)
            {
                this.state1 = false;
                this.hide(this.inMenuList);
            }
        }
    }

    setButtonText(buttonID, text)
    {
        var button = document.getElementById(buttonID);
        button.textContent = text;
    }

    setButtonLink(buttonID, link)
    {
        var button = document.getElementById(buttonID);
        button.href = link;
    }

    defineButtonAction (buttonID, someFunction)
    {
        var button = document.getElementById(buttonID);
        button.onclick = () => someFunction();
    }

    changeXY(divID, posX, posY)
    {
        var temp = document.getElementById(divID);
        temp.style.left = posX;
        temp.style.top = posY;
    }

    styleIT(a, b)
    {
        a.style.textDecoration = "none";
        a.style.textAlign = "left";
        a.style.float = "none";
        a.style.display = "block";
        a.style.color = "gray";
        a.style.padding = "14px 16px";
        b.style.textAlign = "left";
        b.style.float = "none";
        b.style.display = "block";
        b.style.color = "green";
        b.style.padding = "14px 16px";
        b.style.textDecoration = "none";
    }

    show(list)
    {
        list.style.display = "block";
    }

    hide(list)
    {
        list.style.display = "none";
    }
}

window.customElements.define("menu-component", MenuComponent, {extends: 'div'});