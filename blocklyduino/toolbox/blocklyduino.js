function addToolbox() {
    var insideT = ['<xml xmlns="https://developers.google.com/blockly/xml" id="blocklyduinoToolbox" style="display: none">',
    '<category name="%{BKY_CATLOGIC}" categorystyle="logic_category">',
        '<block type="controls_if"></block>',
        '<block type="logic_compare"></block>',
        '<block type="logic_operation"></block>',
        '<block type="logic_negate"></block>',
        '<block type="logic_boolean"></block>',
        '<block type="logic_null"></block>',
        '<block type="logic_ternary"></block>',
    '</category>',
    '<category name="%{BKY_CATLOOPS}" categorystyle="loop_category">',
        '<block type="controls_repeat_ext">',
            '<value name="TIMES">',
                '<shadow type="math_number">',
                    '<field name="NUM">10</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="controls_whileUntil"></block>',
        '<block type="controls_for">',
            '<value name="FROM">',
                '<shadow type="math_number">',
                    '<field name="NUM">1</field>',
                '</shadow>',
            '</value>',
            '<value name="TO">',
                '<shadow type="math_number">',
                    '<field name="NUM">10</field>',
                '</shadow>',
            '</value>',
            '<value name="BY">',
                '<shadow type="math_number">',
                    '<field name="NUM">1</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="controls_forEach"></block>',
        '<block type="controls_flow_statements"></block>',
    '</category>',
    '<category name="%{BKY_CATMATH}" categorystyle="math_category">',
        '<block type="math_number">',
            '<field name="NUM">123</field>',
        '</block>',
        '<block type="math_arithmetic">',
            '<value name="A">',
                '<shadow type="math_number">',
                    '<field name="NUM">1</field>',
                '</shadow>',
            '</value>',
            '<value name="B">',
                '<shadow type="math_number">',
                    '<field name="NUM">1</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="math_single">',
            '<value name="NUM">',
                '<shadow type="math_number">',
                    '<field name="NUM">9</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="math_trig">',
            '<value name="NUM">',
                '<shadow type="math_number">',
                    '<field name="NUM">45</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="math_constant"></block>',
        '<block type="math_number_property">',
            '<value name="NUMBER_TO_CHECK">',
                '<shadow type="math_number">',
                    '<field name="NUM">0</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="math_round">',
            '<value name="NUM">',
                '<shadow type="math_number">',
                    '<field name="NUM">3.1</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="math_on_list"></block>',
        '<block type="math_modulo">',
            '<value name="DIVIDEND">',
                '<shadow type="math_number">',
                    '<field name="NUM">64</field>',
                '</shadow>',
            '</value>',
            '<value name="DIVISOR">',
                '<shadow type="math_number">',
                    '<field name="NUM">10</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="math_constrain">',
            '<value name="VALUE">',
                '<shadow type="math_number">',
                    '<field name="NUM">50</field>',
                '</shadow>',
            '</value>',
            '<value name="LOW">',
                '<shadow type="math_number">',
                    '<field name="NUM">1</field>',
                '</shadow>',
            '</value>',
            '<value name="HIGH">',
                '<shadow type="math_number">',
                    '<field name="NUM">100</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="math_random_int">',
            '<value name="FROM">',
                '<shadow type="math_number">',
                    '<field name="NUM">1</field>',
                '</shadow>',
            '</value>',
            '<value name="TO">',
                '<shadow type="math_number">',
                    '<field name="NUM">100</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="math_random_float"></block>',
    '</category>',
    '<category name="%{BKY_CATTEXT}" categorystyle="text_category">',
        '<block type="text"></block>',
        '<block type="text_join"></block>',
        '<block type="text_append">',
            '<value name="TEXT">',
                '<shadow type="text"></shadow>',
            '</value>',
        '</block>',
        '<block type="text_length">',
            '<value name="VALUE">',
                '<shadow type="text">',
                    '<field name="TEXT">abc</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="text_isEmpty">',
            '<value name="VALUE">',
                '<shadow type="text">',
                    '<field name="TEXT"></field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="text_indexOf">',
            '<value name="VALUE">',
                '<block type="variables_get">',
                    '<field name="VAR">{textVariable}</field>',
                '</block>',
            '</value>',
            '<value name="FIND">',
                '<shadow type="text">',
                    '<field name="TEXT">abc</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="text_charAt">',
            '<value name="VALUE">',
                '<block type="variables_get">',
                    '<field name="VAR">{textVariable}</field>',
                '</block>',
            '</value>',
        '</block>',
        '<block type="text_getSubstring">',
            '<value name="STRING">',
                '<block type="variables_get">',
                    '<field name="VAR">{textVariable}</field>',
                '</block>',
            '</value>',
        '</block>',
        '<block type="text_changeCase">',
            '<value name="TEXT">',
                '<shadow type="text">',
                    '<field name="TEXT">abc</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="text_trim">',
            '<value name="TEXT">',
                '<shadow type="text">',
                    '<field name="TEXT">abc</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="text_print">',
            '<value name="TEXT">',
                '<shadow type="text">',
                    '<field name="TEXT">abc</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="text_prompt_ext">',
            '<value name="TEXT">',
                '<shadow type="text">',
                    '<field name="TEXT">abc</field>',
                '</shadow>',
            '</value>',
        '</block>',
    '</category>',
    '<category name="%{BKY_CATLISTS}" categorystyle="list_category">',
        '<block type="lists_create_with">',
            '<mutation items="0"></mutation>',
        '</block>',
        '<block type="lists_create_with"></block>',
        '<block type="lists_repeat">',
            '<value name="NUM">',
                '<shadow type="math_number">',
                    '<field name="NUM">5</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="lists_length"></block>',
        '<block type="lists_isEmpty"></block>',
        '<block type="lists_indexOf">',
            '<value name="VALUE">',
                '<block type="variables_get">',
                    '<field name="VAR">{listVariable}</field>',
                '</block>',
            '</value>',
        '</block>',
        '<block type="lists_getIndex">',
            '<value name="VALUE">',
                '<block type="variables_get">',
                    '<field name="VAR">{listVariable}</field>',
                '</block>',
            '</value>',
        '</block>',
        '<block type="lists_setIndex">',
            '<value name="LIST">',
                '<block type="variables_get">',
                    '<field name="VAR">{listVariable}</field>',
                '</block>',
            '</value>',
        '</block>',
        '<block type="lists_getSublist">',
            '<value name="LIST">',
                '<block type="variables_get">',
                    '<field name="VAR">{listVariable}</field>',
                '</block>',
            '</value>',
        '</block>',
        '<block type="lists_split">',
            '<value name="DELIM">',
                '<shadow type="text">',
                    '<field name="TEXT">,</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="lists_sort"></block>',
    '</category>',
    '<category name="%{BKY_CATCOLOUR}" categorystyle="colour_category">',
        '<block type="colour_picker"></block>',
        '<block type="colour_random"></block>',
        '<block type="colour_rgb">',
            '<value name="RED">',
                '<shadow type="math_number">',
                    '<field name="NUM">100</field>',
                '</shadow>',
            '</value>',
            '<value name="GREEN">',
                '<shadow type="math_number">',
                    '<field name="NUM">50</field>',
                '</shadow>',
            '</value>',
            '<value name="BLUE">',
                '<shadow type="math_number">',
                    '<field name="NUM">0</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="colour_blend">',
            '<value name="COLOUR1">',
                '<shadow type="colour_picker">',
                    '<field name="COLOUR">#ff0000</field>',
                '</shadow>',
            '</value>',
            '<value name="COLOUR2">',
                '<shadow type="colour_picker">',
                    '<field name="COLOUR">#3333ff</field>',
                '</shadow>',
            '</value>',
            '<value name="RATIO">',
                '<shadow type="math_number">',
                    '<field name="NUM">0.5</field>',
                '</shadow>',
            '</value>',
        '</block>',
    '</category>',
    '<sep></sep>',
    '<category name="%{BKY_CATVARIABLES}" categorystyle="variable_category" custom="VARIABLE_DYNAMIC"></category>',
    '<category name="%{BKY_CATFUNCTIONS}" categorystyle="procedure_category" custom="PROCEDURE"></category>',
    '<sep></sep>',
    '<category name="%{BKY_CAT_ARDUINO}" categorystyle="arduino_category">',
        '<category name="%{BKY_CAT_ARDUINO_IO}" categorystyle="arduino_category">',
            '<block type="arduino_base_inout_buildin_led"></block>',
            '<block type="arduino_base_inout_digital_write"></block>',
            '<block type="arduino_base_inout_digital_read"></block>',
            '<block type="arduino_base_inout_highlow"></block>',
            '<block type="arduino_base_inout_analog_write">',
                '<value name="PWM">',
                    '<shadow type="math_number">',
                        '<field name="NUM">0</field>',
                    '</shadow>',
                '</value>',
            '</block>',
            '<block type="arduino_base_inout_analog_read"></block>',
            '<block type="arduino_base_delay">',
                '<value name="DELAY_TIME">',
                    '<shadow type="math_number">',
                        '<field name="NUM">1000</field>',
                    '</shadow>',
                '</value>',
            '</block>',
            '<block type="arduino_base_angle"></block>',
            '<block type="arduino_base_date"></block>',
            '<block type="arduino_base_map"></block>',
            '<block type="arduino_base_inout_tone">',
                '<value name="NUM">',
                    '<shadow type="math_number">',
                        '<field name="NUM">440</field>',
                    '</shadow>',
                '</value>',
            '</block>',
            '<block type="arduino_base_inout_notone"></block>',
            '<block type="arduino_base_serial_print">',
                '<value name="CONTENT">',
                    '<shadow type="text">',
                        '<field name="TEXT"></field>',
                    '</shadow>',
                '</value>',
            '</block>',
        '</category>',
    '</category>',
    '<category name="%{BKY_CAT_SEEED}" categorystyle="seeed_category">',
        '<category name="%{BKY_CAT_GROVE}" categorystyle="grove_category">',
            '<category name="%{BKY_CAT_GROVE_IO}" categorystyle="grove_category">',
                '<block type="grove_led"></block>',
                '<block type="grove_button"></block>',
                '<block type="grove_relay"></block>',
                '<block type="grove_tilt_switch"></block>',
                '<block type="grove_piezo_buzzer"></block>',
                '<block type="grove_pir_motion_sensor"></block>',
                '<block type="grove_line_finder"></block>',
                '<block type="grove_rgb_led"></block>',
                '<block type="grove_ultrasonic_ranger"></block>',
            '</category>',
            '<category name="%{BKY_CAT_GROVE_ANALOG}" categorystyle="grove_category">',
                '<block type="grove_rotary_angle"></block>',
                '<block type="grove_temperature_sensor"></block>',
                '<block type="grove_sound_sensor"></block>',
                '<block type="grove_thumb_joystick"></block>',
            '</category>',
            '<category name="%{BKY_CAT_GROVE_LCD}" categorystyle="grove_category">',
                '<block type="grove_serial_lcd_print">',
                    '<value name="TEXT1">',
                        '<shadow type="text">',
                            '<field name="TEXT"></field>',
                        '</shadow>',
                    '</value>',
                    '<value name="TEXT2">',
                        '<shadow type="text">',
                            '<field name="TEXT"></field>',
                        '</shadow>',
                    '</value>',
                    '<value name="DELAY_TIME">',
                        '<shadow type="math_number">',
                            '<field name="NUM">1000</field>',
                        '</shadow>',
                    '</value>',
                '</block>',
                '<block type="grove_serial_lcd_power"></block>',
                '<block type="grove_serial_lcd_effect"></block>',
            '</category>',
            '<category name="%{BKY_CAT_GROVE_MOTOR}" categorystyle="grove_category">',
                '<block type="grove_motor_shield"></block>',
            '</category>',
        '</category>',
    '</category>',
    '<category name="%{BKY_CAT_SERVO}" categorystyle="servo_category">',
        '<block type="servo_move">',
            '<value name="DEGREE">',
                '<shadow type="math_number">',
                    '<field name="NUM">90</field>',
                '</shadow>',
            '</value>',
        '</block>',
        '<block type="servo_read_degrees"></block>',
    '</category>',
    '</xml>'].join('');
$("body").append(insideT);
};