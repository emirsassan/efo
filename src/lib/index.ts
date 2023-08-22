// place files you want to import through the `$lib` alias in this folder.
export async function fetchRepo() {
    const res = await fetch("https://raw.githubusercontent.com/emirsassan/weave-index/main/ModIndex.json")
    return res.json()
}
