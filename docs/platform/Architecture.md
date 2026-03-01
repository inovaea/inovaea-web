
### Code Architecture

```text title="Architecture"
fabrika.platform/
├─ platformio.ini
├─ README.md
├─ LICENSE
├─ boards_pio/
│  └─ (voliteľné neskôr)
├─ include/
│  ├─ fp_types.h
│  ├─ fp_log.h
│  ├─ fp_build.h
│  ├─ fp_config_defaults.h
│  └─ fp_contract.h
├─ src/
│  ├─ main.cpp
│  ├─ fp_core/
│  │  ├─ fp_board_select.h
│  │  ├─ platform.h
│  │  ├─ platform.cpp
│  │  ├─ service_manager.h
│  │  ├─ service_manager.cpp
│  │  ├─ scheduler.h
│  │  ├─ scheduler.cpp
│  │  ├─ events.h
│  │  ├─ events.cpp
│  │  ├─ diagnostics.h
│  │  └─ diagnostics.cpp
│  ├─ fp_bsp/
│  │  ├─ fp_bsp.h
│  │  ├─ fp_bsp.cpp
│  │  └─ fp_pins.h
│  ├─ fp_hal/
│  │  ├─ hal_time.h
│  │  └─ hal_time.cpp
│  ├─ fp_services/
│  │  ├─ svc_storage.h
│  │  ├─ svc_storage.cpp
│  │  ├─ svc_io.h
│  │  ├─ svc_io.cpp
│  │  ├─ svc_eth.h
│  │  ├─ svc_eth.cpp
│  │  ├─ svc_web_mongoose.h
│  │  ├─ svc_web_mongoose.cpp
│  │  ├─ svc_can.h
│  │  ├─ svc_can.cpp
│  │  ├─ svc_rs485.h
│  │  ├─ svc_rs485.cpp
│  │  ├─ svc_display_lvgl.h
│  │  └─ svc_display_lvgl.cpp
│  ├─ fp_ui/
│  │  ├─ fp_ui.h
│  │  ├─ fp_ui.cpp
│  │  └─ squareline/
│  │     ├─ ui.h
│  │     └─ ui.c
│  ├─ boards/
│  │  ├─ stepTM_1_0/
│  │  │  ├─ board.h
│  │  │  └─ board.cpp
│  │  └─ stepHMI5_1/
│  │     ├─ board.h
│  │     └─ board.cpp
│  └─ app/
│     ├─ app.h
│     ├─ app.cpp
│     ├─ app_config.h
│     ├─ app_config.cpp
│     ├─ app_routes.h
│     ├─ app_routes.cpp
│     ├─ app_ui.h
│     └─ app_ui.cpp
└─ lib/
   └─ (vendored knižnice doplníš neskôr)


```