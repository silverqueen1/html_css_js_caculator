document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("button");
  
    let currentValue = "";
    
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
  
        if (value === "AC") {
          currentValue = "";
        } else if (value === "DEL") {
          currentValue = currentValue.slice(0, -1);
        } else if (value === "=") {
          try {
            currentValue = eval(currentValue);
          } catch {
            currentValue = "Error";
          }
        } else {
          currentValue += value;
        }
        
        display.value = currentValue;
      });
    });
  });
  