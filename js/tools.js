import { state } from './state.js';
import { drawLine } from './canvas.js';

export function setupTools(canvas, ctx) {
    const getCoords = (e) => {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    };

    const startDrawing = (e) => {
        state.isDrawing = true;
        const coords = getCoords(e);
        state.lastX = coords.x;
        state.lastY = coords.y;
    };

    const draw = (e) => {
        if (!state.isDrawing) return;
        e.preventDefault();
        const coords = getCoords(e);
        drawLine(ctx, state.lastX, state.lastY, coords.x, coords.y, state.color, state.brushSize, state.tool);
        state.lastX = coords.x;
        state.lastY = coords.y;
    };

    const stopDrawing = () => {
        state.isDrawing = false;
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
}
