import path from "path";
import Copier from "./copier";

/// dirs from client
const dirForClientAssets = path.join(process.cwd(), "client", "public");
const dirForClientJS = path.join(dirForClientAssets, "js");
const dirForClientCSS = path.join(dirForClientAssets, "css");
const dirForClientImages = path.join(dirForClientAssets, "img");
const dirForFavicon = path.join(dirForClientAssets, "img");
const dirForManifest = path.join(dirForClientAssets, "img");

/// dirs to server
const dirForServerAssets = path.join(__dirname, "..", "..", "server", "public", "assets");
const dirForServerJS = path.join(dirForServerAssets, "js");
const dirForServerCSS = path.join(dirForServerAssets, "css");
const dirForServerImages = path.join(dirForServerAssets, "img");

const arrayToCopy = [
	{ from: dirForClientJS, to: dirForServerJS },
	{ from: dirForClientCSS, to: dirForServerCSS },
	{ from: dirForClientImages, to: dirForServerImages },
];

// const copierStatic = new Copier({ dirsFromClient, dirsForServer });
const copierStatic = new Copier({ arrayToCopy });

copierStatic.init();
