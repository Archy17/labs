defmodule WhatTheKeyTest do
  use ExUnit.Case
  import ExUnit.CaptureIO
  doctest WhatTheKey

  @key "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC5iQNPsROySN/1HxI3jkgwPUcnjv0X4bbQvA+1YeBcCxI1+y1AnidpyEE2gASTYMTj4xbPQ7D19aQreDVkOOZtg7TqiQETV1MdGq9focgO5WuBORaU3CO+a3F861MrT1sNsHBC/HNYWpPBFrWkRnBK6j2hH3FG5U236uNb1MbEt6tIha51rtm7up/s/IcmR4yy2Vsm2nzVXH2VzoyD+tIOt1bRpaTlIxTakgm8HHf8AIzyPYsdOWrKOYDRQIGp9S2bXIazg3d9FQ+2oWewo8xzkXprbMHisJpe13PTde214Uu36I2+NAmPl9ktSCkCmLr0jGy1InLcBWHknzLNsgBPcpImmaF8pNj5xQYLIE0CC8Ev1vhFhqN11UoeYXfeZmWfJl4G9lVT/f7p1eTe2qcmPPanbBbGQTHu5VBnQQtyUNyN78GAsunpG7n4xgADHUi1GXQnNW2EoUR8BI3j3B8DS30wguOv0Wg37FQgokndtphIaNzVg0OuMK1mC8drTMcjpdJIj3UwVyzoFegNXXK0jMo9k8Q0fPCdPYY7XKh1g4jk9aI1nyYvOvJkUS0HrqiOFXmSfj07l1zZeRojmHDcSfWJmqsVLkCXIZ/5dg0+mNrZtCDJvZna4Ppc+mZprOrRGg8zzGoqtV/VvVz9FE3lF70DmQX5pM1GlieCRMgg8Q=="

  test "main/1 should output user's public key if correct username was given" do
    assert capture_io(fn -> WhatTheKey.main(["ericdouglas"], SystemMock) end) == @key <> "\n"
  end

  test "main/1 should output error message when something goes wrong" do
    assert capture_io(fn -> WhatTheKey.main(["ericdouglas12345"], SystemMock) end) == "Key not found" <> "\n"
  end

  test "main/1 should output usage when user does not know how to use tool" do
    assert capture_io(fn -> WhatTheKey.main([], SystemMock) end) == "Usage: ./what_the_key github_username" <> "\n"
  end
end
