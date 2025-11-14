@@ -1, 0 + 1, 101 @@
def my_function():
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
Mbit_IR.on_press_event(RemoteButton.POWER, my_function)
def my_function2():
basic.show_icon(IconNames.TORTOISE)
Mbit_IR.on_press_event(RemoteButton.NUM8, my_function2)
def my_function3():
mbit_Robot.car_ctrl_speed2(mbit_Robot.CarState.CAR_RUN, 33, 0)
basic.pause(50)
mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_STOP)
Mbit_IR.on_press_event(RemoteButton.RIGHT, my_function3)
def my_function4():
basic.show_icon(IconNames.RABBIT)
Mbit_IR.on_press_event(RemoteButton.NUM9, my_function4)
def my_function5():
basic.show_icon(IconNames.COW)
Mbit_IR.on_press_event(RemoteButton.NUM0, my_function5)
def my_function6():
mbit_Robot.car_ctrl_speed2(mbit_Robot.CarState.CAR_BACK, 0, 70)
basic.pause(50)
mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_STOP)
Mbit_IR.on_press_event(RemoteButton.UP, my_function6)
def my_function7():
basic.pause(100)
music.play(music.tone_playable(494, music.beat(BeatFraction.WHOLE)),
    music.PlaybackMode.UNTIL_DONE)
Mbit_IR.on_press_event(RemoteButton.NUM7, my_function7)
def my_function8():
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.GREEN)
Mbit_IR.on_press_event(RemoteButton.MINUS, my_function8)
def my_function9():
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.WHITE)
Mbit_IR.on_press_event(RemoteButton.LIGHT, my_function9)
def my_function10():
mbit_Robot.car_ctrl_speed2(mbit_Robot.CarState.CAR_BACK, 35, 0)
basic.pause(50)
mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_STOP)
Mbit_IR.on_press_event(RemoteButton.LEFT, my_function10)
def my_function11():
mbit_Robot.car_ctrl_speed2(mbit_Robot.CarState.CAR_RUN, 0, 71)
basic.pause(50)
mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_STOP)
Mbit_IR.on_press_event(RemoteButton.DOWN, my_function11)
def my_function12():
basic.pause(100)
music.play(music.tone_playable(330, music.beat(BeatFraction.WHOLE)),
    music.PlaybackMode.UNTIL_DONE)
Mbit_IR.on_press_event(RemoteButton.NUM3, my_function12)
def my_function13():
basic.pause(100)
music.play(music.tone_playable(392, music.beat(BeatFraction.WHOLE)),
    music.PlaybackMode.UNTIL_DONE)
Mbit_IR.on_press_event(RemoteButton.NUM5, my_function13)
def my_function14():
basic.pause(100)
music.play(music.tone_playable(294, music.beat(BeatFraction.WHOLE)),
    music.PlaybackMode.UNTIL_DONE)
Mbit_IR.on_press_event(RemoteButton.NUM2, my_function14)
def my_function15():
music.ring_tone(698)
basic.pause(400)
music.rest(music.beat(BeatFraction.SIXTEENTH))
Mbit_IR.on_press_event(RemoteButton.BEEP, my_function15)
def my_function16():
basic.pause(100)
music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
    music.PlaybackMode.UNTIL_DONE)
Mbit_IR.on_press_event(RemoteButton.NUM1, my_function16)
def my_function17():
basic.pause(100)
music.play(music.tone_playable(440, music.beat(BeatFraction.WHOLE)),
    music.PlaybackMode.UNTIL_DONE)
Mbit_IR.on_press_event(RemoteButton.NUM6, my_function17)
def my_function18():
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.PINKISH)
Mbit_IR.on_press_event(RemoteButton.PLUS, my_function18)
def my_function19():
basic.pause(100)
music.play(music.tone_playable(349, music.beat(BeatFraction.WHOLE)),
    music.PlaybackMode.UNTIL_DONE)
Mbit_IR.on_press_event(RemoteButton.NUM4, my_function19)
Mbit_IR.init(Pins.P8)
