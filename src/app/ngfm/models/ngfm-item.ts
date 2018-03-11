export class NgfmItem {
    /**
     * Full name eg. `my_pic.jpg`
     */
    name = '';

    selected = false;
    hash: string; // Unique identifier made from all properties
    readonly itemType: string;
    get isFile() { return this.itemType === 'file'; }
    get isFolder() { return this.itemType === 'folder'; }
    constructor(init: any) {
        this.hash = (<any>Object).entries(init).reduce((acc, cur) => `${acc}#${cur.join('|')}`, '');

    }
}