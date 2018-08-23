/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Constants.arduino_base');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.arduino_base.HUE = 120;

Blockly.Constants.arduino_base_base_delay = {
  init: function() {
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("Delay")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time');
    this.setHelpUrl('http://arduino.cc/en/Reference/delay');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};

Blockly.Constants.arduino_base_base_map = {
  init: function() {
    this.appendValueInput("NUM", 'Number')
        .appendField("Map ")
        .setCheck('Number');
    this.appendValueInput("DMAX", 'Number')
        .appendField("value to [0-")
        .setCheck('Number');
    this.appendDummyInput()
	      .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('Re-maps a number from [0-1024] to another.');
    this.setHelpUrl('http://arduino.cc/en/Reference/map');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};

Blockly.Constants.arduino_base_inout_buildin_led = {
   init: function() {
     this.appendDummyInput()
	       .appendField("Build-in LED Stat")
	       .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setTooltip('light or off the build-in LED');
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalWrite');
    this.setColour(Blockly.Constants.arduino_base.HUE);
   }
};

Blockly.Constants.arduino_base_inout_digital_write = {
  init: function() {
    this.appendDummyInput()
	      .appendField("DigitalWrite PIN#")
	      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      	.appendField("Stat")
      	.appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write digital value to a specific Port');
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalWrite');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};

Blockly.Constants.arduino_base_inout_digital_read = {
  init: function() {
    this.appendDummyInput()
	      .appendField("DigitalRead PIN#")
	      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};

Blockly.Constants.arduino_base_inout_analog_write = {
  init: function() {
    this.appendDummyInput()
        .appendField("AnalogWrite PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("PWM", 'Number')
        .appendField("NUM")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write analog value between 0 and 255 to a specific Port');
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogWrite');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};

Blockly.Constants.arduino_base_inout_analog_read = {
  init: function() {
    this.appendDummyInput()
        .appendField("AnalogRead PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('Return value between 0 and 1024');
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};

Blockly.Constants.arduino_base_inout_tone = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tone PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("NUM", "Number")
        .appendField("frequency")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Generate audio tones on a pin");
    this.setHelpUrl('http://www.arduino.cc/en/Reference/Tone');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};

Blockly.Constants.arduino_base_inout_notone = {
  init: function() {
    this.appendDummyInput()
        .appendField("No tone PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Stop generating a tone on a pin");
    this.setHelpUrl('http://www.arduino.cc/en/Reference/NoTone');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};

Blockly.Constants.arduino_base_inout_highlow = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), 'BOOL')
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
    this.setHelpUrl('http://arduino.cc/en/Reference/Constants');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};

//servo block
//http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?cPath=170_171
Blockly.Constants.arduino_base_servo_move = {
  init: function() {
    this.appendDummyInput()
        .appendField("Servo")
        .appendField(new Blockly.FieldImage("https://statics3.seeedstudio.com/images/product/EMAX%20Servo.jpg", 64, 64))
        .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("DEGREE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Degree (0~180)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('move between 0~180 degree');
    this.setHelpUrl('http://www.arduino.cc/playground/ComponentLib/servo');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};

Blockly.Constants.arduino_base_servo_read_degrees = {
  init: function() {
    this.appendDummyInput()
        .appendField("Servo")
        .appendField(new Blockly.FieldImage("https://statics3.seeedstudio.com/images/product/EMAX%20Servo.jpg", 64, 64))
        .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Read Degrees")
    this.setOutput(true, 'Number');
    this.setTooltip('return that degree with the last servo move.');
    this.setHelpUrl('http://www.arduino.cc/playground/ComponentLib/servo');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};

Blockly.Constants.arduino_base_serial_print = {
  init: function() {
    this.appendValueInput("CONTENT", 'String')
        .appendField("Serial Print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port as human-readable ASCII text.');
    this.setHelpUrl('http://www.arduino.cc/en/Serial/Print');
    this.setColour(Blockly.Constants.arduino_base.HUE);
  }
};
