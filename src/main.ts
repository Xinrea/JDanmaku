// Modules to control application life and create native browser window
import {app, dialog, Tray, Menu, nativeImage} from 'electron'
import path = require('path')
import {WindowManager} from './lib/window_manager'
import JLogger from './lib/logger'
import BackendService from './lib/backend_service'
import ConfigStore from './lib/config_store'

const log = JLogger.getInstance('main')

let tray = null
app.whenReady().then(() => {
  app.on('activate', function () {
  })
  const icon = nativeImage.createFromPath(
    path.join(__dirname, 'assets/icons/main.png')
  )
  tray = new Tray(icon.resize({width: 16, height: 16}))
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '关于',
      type: 'normal',
      click: () => {
        dialog.showMessageBox(null, {
          type: 'info',
          title: '关于',
          message: 'JLiverTool 弹幕机 v' + app.getVersion(),
          detail: '作者：@Xinrea',
        })
      },
    },
    {
      label: '检查更新',
      type: 'normal',
      click: () => {
        // TODO check update
      },
    },
    {
      label: '鼠标穿透',
      submenu: [
        {
          label: '弹幕窗口',
          type: 'checkbox',
          click: (e) => {
          },
        },
        {
          label: '礼物窗口',
          type: 'checkbox',
          click: (e) => {
          },
        },
        {
          label: '醒目留言窗口',
          type: 'checkbox',
          click: (e) => {
          },
        },
      ],
    },
    {
      label: '设置',
      type: 'normal',
      click: () => {
      },
    },
    {
      label: '退出',
      type: 'normal',
      click: () => {
        app.quit()
      },
    },
  ])

  // 设置托盘的上下文菜单
  tray.setContextMenu(contextMenu)

  // 注册一个点击事件处理函数
  tray.on('click', () => {
  })
})

app.on('window-all-closed', function () {
  app.quit()
})

app.on('ready', () => {
  const store = new ConfigStore()
  const backend_service = new BackendService()
  // initialize windows
  const window_manager = new WindowManager(store, () => {
    log.info('Main window closed, exiting')
    backend_service.Stop()
    app.quit()
  })

  backend_service.Start(843610, store, window_manager)
})
