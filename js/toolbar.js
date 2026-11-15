import { state } from './state.js';
import { clearCanvas } from './canvas.js';

export function setupToolbar(canvas, ctx) {
    const colorPicker = document.getElementById('colorPicker');
    const brushSize = document.getElementById('brushSize');
    const sizeDisplay = document.getElementById('sizeDisplay');
    const penBtn = document.getElementById('penBtn');
    const eraserBtn = document.getElementById('eraserBtn');
    const clearBtn = document.getElementById('clearBtn');
    const saveBtn = document.getElementById('saveBtn');

    colorPicker.addEventListener('input', (e) => state.color = e.target.value);
    
    brushSize.addEventListener('input', (e) => {
        state.brushSize = e.target.value;
        sizeDisplay.textContent = `${e.target.value}px`;
    });

    penBtn.addEventListener('click', () => {
        state.tool = 'pen';
        penBtn.classList.add('active');
        eraserBtn.classList.remove('active');
    });

    eraserBtn.addEventListener('click', () => {
        state.tool = 'eraser';
        eraserBtn.classList.add('active');
        penBtn.classList.remove('active');
    });

    clearBtn.addEventListener('click', () => clearCanvas(canvas, ctx));

    saveBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'mi-dibujo.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
