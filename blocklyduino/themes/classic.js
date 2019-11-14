/**
 * @license
 * Copyright 2018 Google LLC
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
 * @fileoverview Classic theme.
 * Contains multi-coloured border to create shadow effect.
 * forked from original Blockly file
 * @author scanet@libreduc.cc (Sébastien Canet)
 */
'use strict';

goog.provide('Blockly.Themes.blocklyClassic');

goog.require('Blockly.Theme');


// Temporary holding object.
Blockly.Themes.blocklyClassic = {};

Blockly.Themes.blocklyClassic.defaultBlockStyles = {
  "colour_blocks": {
    "colourPrimary": "20"
  },
  "list_blocks": {
    "colourPrimary": "260"
  },
  "logic_blocks": {
    "colourPrimary": "210"
  },
  "loop_blocks": {
    "colourPrimary": "120"
  },
  "math_blocks": {
    "colourPrimary": "230"
  },
  "procedure_blocks": {
    "colourPrimary": "290"
  },
  "text_blocks": {
    "colourPrimary": "160"
  },
  "variable_blocks": {
    "colourPrimary": "330"
  },
  "variable_dynamic_blocks": {
    "colourPrimary": "310"
  },
  "hat_blocks": {
    "colourPrimary": "330",
    "hat": "cap"
  },
  "arduino_blocks":{
    "colourPrimary":"#007481"
  },
  "seeed_blocks":{
    "colourPrimary": "#91C11E"
  },
  "grove_blocks":{
    "colourPrimary":"#018770"
  },
  "servo_blocks":{
    "colourPrimary":"#343434"
  }
};

Blockly.Themes.blocklyClassic.categoryStyles = {
  "colour_category": {
    "colour": "20"
  },
  "list_category": {
    "colour": "260"
  },
  "logic_category": {
    "colour": "210"
  },
  "loop_category": {
    "colour": "120"
  },
  "math_category": {
    "colour": "230"
  },
  "procedure_category": {
    "colour": "290"
  },
  "text_category": {
    "colour": "160"
  },
  "variable_category": {
    "colour": "330"
  },
  "variable_dynamic_category": {
    "colour": "310"
  },
  "arduino_category":{
    "colour":"#007481"
  },
  "seeed_category":{
    "colour":"#91C11E"
  },
  "grove_category":{
    "colour":"#018770"
  },
  "servo_category":{
    "colour":"#343434"
  }
};

Blockly.Themes.blocklyClassic =
    new Blockly.Theme(Blockly.Themes.blocklyClassic.defaultBlockStyles,
        Blockly.Themes.blocklyClassic.categoryStyles);
