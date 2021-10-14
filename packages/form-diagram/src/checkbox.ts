export function checkbox(ctx: CanvasRenderingContext2D, pen: any) {
  if (!pen.onAdd) {
    pen.onAdd = checkboxAdd;
  }
  // let x = pen.calculative.worldRect.x;
  // let y = pen.calculative.worldRect.y;
  // let w = pen.calculative.worldRect.width;
  // let h = pen.calculative.worldRect.height;
  // ctx.beginPath();
  // ctx.rect(x, y, w, h);
  // ctx.stroke();
  // ctx.closePath();
  return false;
}

function checkboxAdd(pen: any) {
  let x = pen.calculative.worldRect.x;
  let y = pen.calculative.worldRect.y;
  let w = pen.calculative.worldRect.width;
  let h = pen.calculative.worldRect.height;

  if (pen.direction == 'horizontal') {
    let length = pen.options.length;
    for (let i = 0; i < length; i++) {
      let childPen: any = {
        name: 'checkboxItem',
        x: x + (i * w) / length,
        y: y,
        width: w / length,
        height: h,
        isChecked: pen.selections.includes(pen.options[i]),
        text: pen.options[i],
        textLeft: (h * 6) / 5,
        fillColor: '#1890ff',
      };
      pen.calculative.canvas.makePen(childPen);
      pen.calculative.canvas.parent.pushChildren(pen, [childPen]);
    }
  } else if (pen.direction == 'vertical') {
    let length = pen.options.length;
    for (let i = 0; i < length; i++) {
      let childPen: any = {
        name: 'checkboxItem',
        x: x,
        y: y + ((i * h) / (length * 2 - 1)) * 2,
        width: w,
        height: h / (length * 2 - 1),
        isChecked: pen.selections.includes(pen.options[i]),
        text: pen.options[i],
        textLeft: ((h / (length * 2 - 1)) * 6) / 5,
        fillColor: '#1890ff',
      };
      pen.calculative.canvas.makePen(childPen);
      pen.calculative.canvas.parent.pushChildren(pen, [childPen]);
    }
  }
}