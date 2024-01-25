import { GiftType } from './bilibili/api/room/gift_config'
import { EmojiContent, Sender, MergeUserInfo, DmExtraInfo } from './types'

export class DanmuMessage {
  sender: Sender = new Sender()
  content: string
  is_generated: boolean = false
  is_special: boolean = false
  emoji_content: EmojiContent = null
  side_index: number = -1
  reply_uname: string = null

  constructor(body: any, user_info: MergeUserInfo = null) {
    // basic info
    if (user_info) {
      this.side_index = user_info.index
    }
    this.sender.uid = body.info[2][0]
    this.sender.uname = body.info[2][1]
    // TODO maybe need the backend service to offer a face cache
    this.sender.face = ''

    const extra_info = body.info[0][15] as DmExtraInfo
    if (extra_info.show_reply && extra_info.reply_uname != '') {
      this.reply_uname = extra_info.reply_uname
    }

    // medalinfo
    // there is an example of medalinfo (info[3]) and its final html structure.
    //  info[3] = [
    //     29, -- medal_level
    //     "轴芯", -- medal_name
    //     "轴伊Joi_Channel", -- anchor_uname
    //     21484828, -- anchor_roomid
    //     2951253, -- #2d0855 medal_color_text
    //     "",
    //     0,
    //     6809855, -- #6718ff medal_color_border
    //     2951253, -- #2d0855 medal_color_start
    //     10329087, -- #9d9bff medal_color_end
    //     3, -- guard_level
    //     1, -- is_lighted
    //     61639371 -- anchor_id (not used)
    //  ],
    // <div class="fans-medal-item" stype="border-color: #67e8ff">
    // <div class="fans-medal-label"
    //   style="background-image: -o-linear-gradient(45deg, #2d0855, #9d9bff); \
    //          background-image: -moz-linear-gradient(45deg, #2d0855, #9d9bff); \
    //          background-image: -webkit-linear-gradient(45deg, #2d0855, #9d9bff);
    //          background-image: linear-gradient(45deg, #2d0855, #9d9bff);">
    //   <i class="medal-deco  medal-guard" style="background-image: url(https://i0.hdslb.com/bfs/live/143f5ec3003b4080d1b5f817a9efdca46d631945.png@44w_44h.webp);"></i>
    //   <span class="fans-medal-content">轴芯</span>
    // </div>
    if (body.info[3]) {
      this.sender.medal_info.anchor_roomid = body.info[3][3]
      this.sender.medal_info.anchor_uname = body.info[3][2]
      this.sender.medal_info.medal_name = body.info[3][1]
      this.sender.medal_info.medal_level = body.info[3][0]

      this.sender.medal_info.medal_color = body.info[3][4]
      this.sender.medal_info.medal_color_border = body.info[3][7]
      this.sender.medal_info.medal_color_start = body.info[3][8]
      this.sender.medal_info.medal_color_end = body.info[3][9]

      // TODO need confirm
      this.sender.medal_info.guard_level = body.info[3][10]
      this.sender.medal_info.is_lighted = body.info[3][11]
    }

    // trim the content and remove line break
    this.content = body.info[1].trim().replace(/[\r\n]/g, '')

    if (body.info[0][12] == 1) {
      this.emoji_content = body.info[0][13]
    }

    // generated by gift or other kind of activities
    if (body.info[0][9] > 0) {
      this.is_generated = true
    }

    // send by room admin or other special users
    if (body.info[2][2] > 0) {
      this.is_special = true
    }
  }
}

export class GiftMessage {
  id: string
  room: number
  gift_info: GiftType
  sender: Sender
  action: string
  num: number
  timestamp: number
}

export class GuardMessage {
  id: string
  room: number
  sender: Sender
  num: number
  unit: string
  guard_level: number
  price: number
  timestamp: number
}

export class SuperChatMessage {
  id: string
  room: number
  sender: Sender
  message: string
  price: number
  timestamp: number
}

export class InteractMessage {
  sender: Sender
  action: number
}

export class EntryEffectMessage {
  sender: Sender
  privilege_type: number
}

export class GiftInitData {
  gifts: GiftMessage[]
  guards: GuardMessage[]
}
