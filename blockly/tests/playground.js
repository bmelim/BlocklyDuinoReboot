'use strict';

var workspace = null;

function start() {
  setBackgroundColour();

  // Parse the URL arguments.
  var match = location.search.match(/dir=([^&]+)/);
  var rtl = match && match[1] == 'rtl';
  document.forms.options.elements.dir.selectedIndex = Number(rtl);
  var toolbox = getToolboxElement();
  var toolboxNames = [
      'toolbox-categories',
      'toolbox-categories-typed-variables',
      'toolbox-simple',
      'toolbox-test-blocks'
  ];
  document.forms.options.elements.toolbox.selectedIndex =
      toolboxNames.indexOf(toolbox.id);
  match = location.search.match(/side=([^&]+)/);
  var side = match ? match[1] : 'start';
  document.forms.options.elements.side.value = side;
  // Create main workspace.
  workspace = Blockly.inject('blocklyDiv',
      {
        comments: true,
        collapse: true,
        disable: true,
        grid:
          {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true
          },
        horizontalLayout: side == 'top' || side == 'bottom',
        maxBlocks: Infinity,
        maxInstances: {'test_basic_limit_instances': 3},
        media: '../media/',
        oneBasedIndex: true,
        readOnly: false,
        rtl: rtl,
        move: {
          scrollbars: true,
          drag: true,
          wheel: false,
        },
        toolbox: toolbox,
        toolboxPosition: side == 'top' || side == 'start' ? 'start' : 'end',
        zoom:
          {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1.1
          }
      });
  addToolboxButtonCallbacks();
  // Restore previously displayed text.
  if (sessionStorage) {
    var text = sessionStorage.getItem('textarea');
    if (text) {
      document.getElementById('importExport').value = text;
    }
    // Restore event logging state.
    var state = sessionStorage.getItem('logEvents');
    logEvents(Boolean(Number(state)));
  } else {
    // MSIE 11 does not support sessionStorage on file:// URLs.
    logEvents(false);
  }
  taChange();
}

function addToolboxButtonCallbacks() {
  workspace.registerButtonCallback(
      'addDynamicOption', Blockly.TestBlocks.addDynamicDropdownOption_);
  workspace.registerButtonCallback(
      'removeDynamicOption', Blockly.TestBlocks.removeDynamicDropdownOption_);
}

function changeTheme() {
  var theme = document.getElementById('themeChanger');
  if (theme.value === "modern") {
    Blockly.setTheme(Blockly.Themes.Modern);
  } else if (theme.value === "high_contrast") {
    Blockly.setTheme(Blockly.Themes.HighContrast);
  } else {
    Blockly.setTheme(Blockly.Themes.Classic);
  }
}

function setBackgroundColour() {
  // Set background colour to differentiate server vs local copy.
  if (location.protocol == 'file:') {
    var lilac = '#d6d6ff';
    document.body.style.backgroundColor = lilac;
  }
}

function getToolboxElement() {
  var match = location.search.match(/toolbox=([^&]+)/);
  // Default to the basic toolbox with categories and untyped variables,
  // but override that if the toolbox type is set in the URL.
  var toolboxSuffix = (match ? match[1] : 'categories');
  // The three possible values are: "simple", "categories",
  // "categories-typed-variables".
  return document.getElementById('toolbox-' + toolboxSuffix);
}

function toXml() {
  var output = document.getElementById('importExport');
  var xml = Blockly.Xml.workspaceToDom(workspace);
  output.value = Blockly.Xml.domToPrettyText(xml);
  output.focus();
  output.select();
  taChange();
}

function fromXml() {
  var input = document.getElementById('importExport');
  var xml = Blockly.Xml.textToDom(input.value);
  Blockly.Xml.domToWorkspace(xml, workspace);
  taChange();
}

function toCode(lang) {
  var output = document.getElementById('importExport');
  output.value = Blockly[lang].workspaceToCode(workspace);
  taChange();
}

// Disable the "Import from XML" button if the XML is invalid.
// Preserve text between page reloads.
function taChange() {
  var textarea = document.getElementById('importExport');
  if (sessionStorage) {
    sessionStorage.setItem('textarea', textarea.value);
  }
  var valid = true;
  try {
    Blockly.Xml.textToDom(textarea.value);
  } catch (e) {
    valid = false;
  }
  document.getElementById('import').disabled = !valid;
}

function logEvents(state) {
  var checkbox = document.getElementById('logCheck');
  checkbox.checked = state;
  if (sessionStorage) {
    sessionStorage.setItem('logEvents', Number(state));
  }
  if (state) {
    workspace.addChangeListener(logger);
  } else {
    workspace.removeChangeListener(logger);
  }
}

function logger(e) {
  console.log(e);
}

function airstrike(n) {
  var prototypes = [];
  var toolbox = getToolboxElement();
  var blocks = toolbox.getElementsByTagName('block');
  for (var i = 0, block; block = blocks[i]; i++) {
    prototypes.push(block.getAttribute('type'));
  }
  for (var i = 0; i < n; i++) {
    var prototype = prototypes[Math.floor(Math.random() * prototypes.length)];
    var block = workspace.newBlock(prototype);
    block.initSvg();
    block.getSvgRoot().setAttribute('transform', 'translate(' +
        Math.round(Math.random() * 450 + 40) + ', ' +
        Math.round(Math.random() * 600 + 40) + ')');
    block.render();
  }
}

function spaghetti(n) {
  var xml = spaghettiXml;
  for(var i = 0; i < n; i++) {
    xml = xml.replace(/(<(statement|next)( name="DO0")?>)<\//g,
        '$1' + spaghettiXml + '</');
  }
  xml = '<xml xmlns="http://www.w3.org/1999/xhtml">' + xml + '</xml>';
  var dom = Blockly.Xml.textToDom(xml);
  console.time('Spaghetti domToWorkspace');
  Blockly.Xml.domToWorkspace(dom, workspace);
  console.timeEnd('Spaghetti domToWorkspace');
}
var spaghettiXml = [
  '  <block type="controls_if">',
  '    <value name="IF0">',
  '      <block type="logic_compare">',
  '        <field name="OP">EQ</field>',
  '        <value name="A">',
  '          <block type="math_arithmetic">',
  '            <field name="OP">MULTIPLY</field>',
  '            <value name="A">',
  '              <block type="math_number">',
  '                <field name="NUM">6</field>',
  '              </block>',
  '            </value>',
  '            <value name="B">',
  '              <block type="math_number">',
  '                <field name="NUM">7</field>',
  '              </block>',
  '            </value>',
  '          </block>',
  '        </value>',
  '        <value name="B">',
  '          <block type="math_number">',
  '            <field name="NUM">42</field>',
  '          </block>',
  '        </value>',
  '      </block>',
  '    </value>',
  '    <statement name="DO0"></statement>',
  '    <next></next>',
  '  </block>'].join('\n');
