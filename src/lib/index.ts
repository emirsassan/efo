// place files you want to import through the `$lib` alias in this folder.
export async function fetchRepo() {
    const res = await fetch("https://raw.githubusercontent.com/Zircta/Weave-Mod-Index/main/Main.json")
    return res.json()
}
