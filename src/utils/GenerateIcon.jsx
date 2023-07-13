import { fabric } from 'fabric';

export const generateIcon = (imageFile, size) => {
  const canvas = new fabric.Canvas();
  canvas.setWidth(size);
  canvas.setHeight(size);

  fabric.Image.fromURL(URL.createObjectURL(imageFile), function(img) {
    img.scaleToWidth(size);
    img.scaleToHeight(size);
    canvas.centerObject(img);
    canvas.add(img);
    canvas.renderAll();

    // Download the icon
    const a = document.createElement('a');
    a.href = canvas.toDataURL();
    a.download = `icon_${size}x${size}.png`;
    a.click();
  });
};
