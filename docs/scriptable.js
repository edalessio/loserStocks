// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: magic;
const dataUrl = "https://edalessio.github.io/loserStocks/result.json";

let widget = await createWidget();
Script.setWidget(widget);
widget.presentMedium();
Script.complete();

async function createWidget() {
    const widget = new ListWidget();

    const data = await new Request(dataUrl).loadJSON();

    let titleRow = widget.addText(`Losers ${data.timestamp}`);
    titleRow.font = Font.boldSystemFont(15);
    titleRow.textColor = Color.white();
    widget.addSpacer(5);

    for (i = 0; i < 7; i++) {
        const looser = data.loosers[i];
        let row = leftColumn.addText(`
            ${looser.ticker} 
            ${looser.change}
        `);
        row.font = Font.semiboldSystemFont(14);
    }

    let gradient = new LinearGradient()
    
    gradient.colors = [new Color("3a8cc1"), new Color("00A9D6")];
    gradient.locations =  [0, 1];
    
    widget.backgroundGradient = gradient
    return widget;
}
