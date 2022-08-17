import path from "path";

const getVertDir = () => path.join(process.cwd(), '.vert');

export { getVertDir };