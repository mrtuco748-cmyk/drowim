import { initCanvas } from './canvas.js';
import { setupTools } from './tools.js';
import { setupToolbar } from './toolbar.js';

document.addEventListener('DOMContentLoaded', () => {
    const { canvas, ctx } = initCanvas();
    setupTools(canvas, ctx);
    setupToolbar(canvas, ctx);
});
