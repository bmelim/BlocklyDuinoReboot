/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2017 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Utility functions for handling variables dynamic.
 *
 * @author duzc2dtw@gmail.com (Du Tian Wei)
 * @contributor scanet@libreduc.cc (Sébastien Canet)
 */
'use strict';

goog.provide('Blockly.VariablesDynamic');

goog.require('Blockly.Variables');
goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');
goog.require('Blockly.utils.xml');
goog.require('Blockly.VariableModel');
goog.require('Blockly.Xml');


// Blockly.VariablesDynamic.onCreateVariableButtonClick_Array = function(button) {
  // Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      // null, 'Array');
// };
Blockly.VariablesDynamic.onCreateVariableButtonClick_Bool = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Bool');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_Byte = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Byte');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_Char = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Char');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_DoubleFloat = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Double Float');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_Float = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Float');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_Int = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Int');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_Long = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Long');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_Short = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Short');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_String = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'String');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_UnsignedChar = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Unsigned Char');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_UnsignedInt = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Unsigned Int');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_UnsignedLong = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Unsigned Long');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_Word = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      null, 'Word');
};
/**
 * Construct the elements (blocks and button) required by the flyout for the
 * variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML elements.
 */
Blockly.VariablesDynamic.flyoutCategory = function(workspace) {
  var xmlList = [];
  // var button = document.createElement('button');
  // button = document.createElement('button');
  // button.setAttribute('text', 'array');
  // button.setAttribute('callbackKey', 'CREATE_VARIABLE_ARRAY');
  // xmlList.push(button);
  var button;
  button = document.createElement('button');
  button.setAttribute('text', 'bool');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_BOOL');
  xmlList.push(button);
  
  button = document.createElement('button');
  button.setAttribute('text', 'byte');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_BYTE');
  xmlList.push(button);
  
  button = document.createElement('button');
  button.setAttribute('text', 'char');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_CHAR');
  xmlList.push(button);
  
  button = document.createElement('button');
  button.setAttribute('text', 'double');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_DOUBLE_FLOAT');
  xmlList.push(button);
  
  button = document.createElement('button');
  button.setAttribute('text', 'float');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_FLOAT');
  xmlList.push(button);
  
  button = document.createElement('button');
  button.setAttribute('text', 'int');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_INT');
  xmlList.push(button);
  
  button = document.createElement('button');
  button.setAttribute('text', 'long');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_LONG');
  xmlList.push(button);
  
  button = document.createElement('button');
  button.setAttribute('text', 'short');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_SHORT');
  xmlList.push(button);
  
  button.setAttribute('text', 'string');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_STRING');
  xmlList.push(button);
  
  button = document.createElement('button');
  button.setAttribute('text', 'unsigned char');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_UNSIGNED_CHAR');
  xmlList.push(button);
  
  button = document.createElement('button');
  button.setAttribute('text', 'unsigned int');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_UNSIGNED_INT');
  xmlList.push(button);
  
  button = document.createElement('button');
  button.setAttribute('text', 'unsigned long');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_UNSIGNED_LONG');
  xmlList.push(button);
  
  button = document.createElement('button');
  button.setAttribute('text', 'word');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_WORD');
  xmlList.push(button);

  // workspace.registerButtonCallback('CREATE_VARIABLE_ARRAY',
      // Blockly.VariablesDynamic.onCreateVariableButtonClick_Array);
  workspace.registerButtonCallback('CREATE_VARIABLE_BOOL',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_Bool);
  workspace.registerButtonCallback('CREATE_VARIABLE_BYTE',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_Byte);
  workspace.registerButtonCallback('CREATE_VARIABLE_CHAR',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_Char);
  workspace.registerButtonCallback('CREATE_VARIABLE_DOUBLE_FLOAT',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_DoubleFloat);
  workspace.registerButtonCallback('CREATE_VARIABLE_FLOAT',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_Float);
  workspace.registerButtonCallback('CREATE_VARIABLE_INT',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_Int);
  workspace.registerButtonCallback('CREATE_VARIABLE_LONG',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_Long);
  workspace.registerButtonCallback('CREATE_VARIABLE_SHORT',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_Short);
  workspace.registerButtonCallback('CREATE_VARIABLE_STRING',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_String);	  
  workspace.registerButtonCallback('CREATE_VARIABLE_UNSIGNED_CHAR',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_UnsignedChar);
  workspace.registerButtonCallback('CREATE_VARIABLE_UNSIGNED_INT',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_UnsignedInt);
  workspace.registerButtonCallback('CREATE_VARIABLE_UNSIGNED_LONG',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_UnsignedLong);
  workspace.registerButtonCallback('CREATE_VARIABLE_WORD',
      Blockly.VariablesDynamic.onCreateVariableButtonClick_Word);


  var blockList = Blockly.VariablesDynamic.flyoutCategoryBlocks(workspace);
  xmlList = xmlList.concat(blockList);
  return xmlList;
};

/**
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
Blockly.VariablesDynamic.flyoutCategoryBlocks = function(workspace) {
  var variableModelList = workspace.getAllVariables();

  var xmlList = [];
  if (variableModelList.length > 0) {
    if (Blockly.Blocks['variables_set_dynamic']) {
      var firstVariable = variableModelList[variableModelList.length - 1];
      var block = Blockly.utils.xml.createElement('block');
      block.setAttribute('type', 'variables_set_dynamic');
      block.setAttribute('gap', 24);
      block.appendChild(
          Blockly.Variables.generateVariableFieldDom(firstVariable));
      xmlList.push(block);
    }
    if (Blockly.Blocks['variables_get_dynamic']) {
      variableModelList.sort(Blockly.VariableModel.compareByName);
      for (var i = 0, variable; variable = variableModelList[i]; i++) {
        var block = Blockly.utils.xml.createElement('block');
        block.setAttribute('type', 'variables_get_dynamic');
        block.setAttribute('gap', 8);
        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
        xmlList.push(block);
      }
    }
  }
  return xmlList;
};