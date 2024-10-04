import { svg, git } from './data'

export const newAstrologersScreenVerC = /* HTML */ `
  <div class="new_astrologers_screen ver_c">
    <h2 class="main_title">Choose you personal palm reader</h2>
    <p class="main_description">Choose the one who will be your first palm reader. You can change your choice later.</p>
    <ul class="astrologers_list">
      <li class="radio_item">
        <input type="radio" id="radio_btn_1" name="radio_btn" value="Akho" />
        <label for="radio_btn_1">
          <div class="img_wrapper">
            <img src="${git}astrologer_akho_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Akho</h3>
            <p class="astrologer_description">
              6 years in palmistry readings <br />
              and spiritual guidance.
            </p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
      <li class="radio_item">
        <input type="radio" id="radio_btn_2" name="radio_btn" value="Jane" />
        <label for="radio_btn_2">
          <div class="img_wrapper">
            <img src="${git}astrologer_jane_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Jane</h3>
            <p class="astrologer_description">8 years in astrology and palmistry</p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
      <li class="radio_item">
        <input type="radio" id="radio_btn_3" name="radio_btn" value="Samira" />
        <label for="radio_btn_3">
          <div class="img_wrapper">
            <img src="${git}astrologer_samira_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Samira</h3>
            <p class="astrologer_description">20 years in astrology and palmistry</p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
      <li class="radio_item">
        <input type="radio" id="radio_btn_4" name="radio_btn" value="Rebecca" />
        <label for="radio_btn_4">
          <div class="img_wrapper">
            <img src="${git}astrologer_rebecca_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Rebecca</h3>
            <p class="astrologer_description">
              8 years in palmistry readings <br />
              and spiritual guidance.
            </p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
      <li class="radio_item">
        <input type="radio" id="radio_btn_5" name="radio_btn" value="Kate" />
        <label for="radio_btn_5">
          <div class="img_wrapper">
            <img src="${git}astrologer_kate_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Kate</h3>
            <p class="astrologer_description">7 years in palmistry</p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
      <li class="radio_item">
        <input type="radio" id="radio_btn_6" name="radio_btn" value="Lucy" />
        <label for="radio_btn_6">
          <div class="img_wrapper">
            <img src="${git}astrologer_lucy_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Lucy</h3>
            <p class="astrologer_description">10 years in astrology</p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
    </ul>
    <div class="new_sticky_block">
      <div data-nextBtn class="new_continue_btn is_disabled">Continue</div>
      <div data-nextBtn class="choose_later_btn">Choose later</div>
    </div>
  </div>
`
