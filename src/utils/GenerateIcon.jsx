import { fabric } from 'fabric';

export const generateIcon = (imageFile, size) => {
  const canvas = new fabric.Canvas();
  canvas.setWidth(size);
  canvas.setHeight(size);

  fabric.Image.fromURL(URL.createObjectURL(imageFile), function (img) {
    img.scaleToWidth(size);
    img.scaleToHeight(size);
    img.set({ left: 0, top: 0, angle: 0 });

    const patternSourceCanvas = new fabric.StaticCanvas();
    patternSourceCanvas.add(img);
    patternSourceCanvas.renderAll();

    const pattern = new fabric.Pattern({
      source: patternSourceCanvas.getElement(),
      repeat: 'no-repeat',
    });

    const circle = new fabric.Circle({
      left: canvas.getWidth() / 2,
      top: canvas.getHeight() / 2,
      radius: size / 2,
      originX: 'center',
      originY: 'center',
    });

    circle.set({ fill: pattern });
    canvas.add(circle);
    canvas.renderAll();

    // Download the icon
    const a = document.createElement('a');
    a.href = canvas.toDataURL();
    a.download = `icon_${size}x${size}.png`;
    a.click();
  });
};
