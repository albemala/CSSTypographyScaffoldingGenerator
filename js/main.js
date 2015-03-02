/**
 * Created by Alberto Malagoli on 21/02/2015.
 */

var $baseFontSizeInput;
var $scaleSelect;
var $generateStyleButton;
var $showGridInput;
var $preview;
var $selectedElement;
var $selectedElementFontSizeInput;
var $selectedElementLineHeightInput;
var $selectedElementMarginBottomInput;
var $generateCSSButton;

$(document).ready(function ()
{
    $baseFontSizeInput = $("#baseFontSizeInput");
    $scaleSelect = $("#scaleSelect");
    $generateStyleButton = $("#generateStyleButton");
    $preview = $("#preview");
    $showGridInput = $("#showGridInput");
    $selectedElementFontSizeInput = $("#selectedElementFontSize");
    $selectedElementLineHeightInput = $("#selectedElementLineHeight");
    $selectedElementMarginBottomInput = $("#selectedElementMarginBottom");
    $generateCSSButton = $("#generateCSSButton");

    $generateStyleButton.click(generateStyle);
    $baseFontSizeInput.val(16);
    $showGridInput.change(showGridInputOnChange);
    $preview.children("*").click(selectElement);
    $generateCSSButton.click(generateCSS);

    resetSelectedElementInputs();
    setPreviewGridStyle();
    generateStyle();
});

function resetSelectedElementInputs()
{
    $selectedElementFontSizeInput.val("");
    $selectedElementLineHeightInput.val("");
    $selectedElementMarginBottomInput.val("");
    $selectedElementFontSizeInput.prop('disabled', true);
    $selectedElementLineHeightInput.prop('disabled', true);
    $selectedElementMarginBottomInput.prop('disabled', true);
}

function getBaseFontSize()
{
    return $baseFontSizeInput.val();
}

function getBaselineHeight()
{
    return getBaseFontSize() * 1.5;
}

function getBaseMargin()
{
    return getBaselineHeight() + "px";
}

function setPreviewBaselineHeight()
{
    $preview.css({
        "background-size": "100% " + getBaselineHeight() + "px"
    });
}

function setPreviewGridStyle()
{
    if ($showGridInput.is(":checked"))
    {
        $preview.addClass("backgroundGrid");
        setPreviewBaselineHeight();
    }
    else
    {
        $preview.removeClass("backgroundGrid");
    }
}
function showGridInputOnChange()
{
    setPreviewGridStyle();
}

function generateStyle()
{
    var scale = $scaleSelect.val();
    setPreviewBaselineHeight();

    $preview.children("p").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize()),
        "margin-bottom": getBaseMargin()
    });
    $preview.children("h4").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize())
    });
    $preview.children("address").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize()),
        "margin-bottom": getBaseMargin()
    });
    $preview.children("blockquote").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize()),
        "margin-bottom": getBaseMargin()
    });
    $preview.children("hr").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize()),
        "margin-bottom": getBaseMargin()
    });
    $preview.children("pre").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize()),
        "margin-bottom": getBaseMargin()
    });
    $preview.children("ol").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize()),
        "margin-bottom": getBaseMargin()
    });
    $preview.children("ul").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize()),
        "margin-bottom": getBaseMargin()
    });
    $preview.children("dl").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize()),
        "margin-bottom": getBaseMargin()
    });
    $preview.find("li").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize()),
        "margin-left": getBaseMargin()
    });
    $preview.find("dt").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize())
    });
    $preview.find("dd").css({
        "font-size": getFontSizePxFromFontSize(getBaseFontSize()),
        "line-height": getLineHeightPxFromFontSize(getBaseFontSize()),
        "margin-left": getBaseMargin()
    });

    var fontSizeUp2 = getBaseFontSize() * scale;
    $preview.children("h3").css({
        "font-size": getFontSizePxFromFontSize(fontSizeUp2),
        "line-height": getLineHeightPxFromFontSize(fontSizeUp2)
    });

    var fontSizeUp3 = getBaseFontSize() * (scale * 2);
    $preview.children("h2").css({
        "font-size": getFontSizePxFromFontSize(fontSizeUp3),
        "line-height": getLineHeightPxFromFontSize(fontSizeUp3),
        "margin-bottom": getBaseMargin()
    });

    var fontSizeUp4 = getBaseFontSize() * (scale * 3);
    $preview.children("h1").css({
        "font-size": getFontSizePxFromFontSize(fontSizeUp4),
        "line-height": getLineHeightPxFromFontSize(fontSizeUp4),
        "margin-bottom": getBaseMargin()
    });

    var fontSizeDown2 = getBaseFontSize() / scale;
    $preview.children("h5").css({
        "font-size": getFontSizePxFromFontSize(fontSizeDown2),
        "line-height": getLineHeightPxFromFontSize(fontSizeDown2)
    });

    var fontSizeDown3 = getBaseFontSize() / (scale * 2);
    $preview.children("h6").css({
        "font-size": getFontSizePxFromFontSize(fontSizeDown3),
        "line-height": getLineHeightPxFromFontSize(fontSizeDown3)
    });
}

function getFontSizePxFromFontSize(fontSize)
{
    return fontSize + "px";
}

function getLineHeightPxFromFontSize(fontSize)
{
    var multiplier = Math.ceil(fontSize / getBaselineHeight());
    var lineHeight = getBaselineHeight() * multiplier;
    return lineHeight + "px";
}

function populateSelectedElementInputs()
{
    $selectedElementFontSizeInput.prop('disabled', false);
    $selectedElementLineHeightInput.prop('disabled', false);
    $selectedElementMarginBottomInput.prop('disabled', false);
    $selectedElementFontSizeInput.val($selectedElement.css("font-size").replace('px', ''));
    $selectedElementLineHeightInput.val($selectedElement.css("line-height").replace('px', ''));
    $selectedElementMarginBottomInput.val($selectedElement.css("margin-bottom").replace('px', ''));
}

function selectElement()
{
    var element = $(this);

    if ($selectedElement)
    {
        $selectedElement.removeClass("selected");
    }

    if ($selectedElement && $selectedElement[0] === element[0])
    {
        $selectedElement = undefined;
    }
    else
    {
        $selectedElement = element;
        $selectedElement.addClass("selected");

    }

    if ($selectedElement)
    {
        populateSelectedElementInputs();
    }
    else
    {
        resetSelectedElementInputs();
    }
}

function elementInArray(element, array)
{
    var elementInArray = false;
    $.each(array, function (index, value)
    {
        if (value.tagName.toLowerCase() === element.tagName.toLowerCase())
        {
            elementInArray = true;
        }
    });
    return elementInArray;
}

function generateCSS()
{
    var elements = [];
    $("#preview").find("*").each(function (index, element)
    {
        if (!elementInArray(element, elements))
        {
            elements.push(element);
        }
    });
    var cssText = "";
    $.each(elements, function (index, element)
    {
        var tagName = element.tagName.toLowerCase();
        cssText += tagName + " {\n" +
        "\tfont-size: " + $(element).css("font-size") + ";\n" +
        "\tline-height: " + $(element).css("line-height") + ";\n" +
        "\tmargin-bottom: " + $(element).css("margin-bottom") + ";\n" +
        "}\n\n";
    });
    var blob = new Blob([cssText], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "style.css");
}