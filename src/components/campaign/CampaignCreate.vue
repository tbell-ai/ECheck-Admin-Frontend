<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>캠페인물 생성</h3>
      </li>
      <div class="title-right">
        <p>캠페인물 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>캠페인물 생성</b>
      </div>
    </ul>
    <section>
      <article>
        <table class="table7">
          <tr>
            <th>캠페인 제목</th>
            <td>
              <input
                type="text"
                v-model="campaignTitle"
                @change="campaignTitleValid()"
              />
            </td>
          </tr>
          <tr>
            <th>캠페인 적용 여부</th>
            <td>
              <ul class="align1">
                <li class="radio-wrap">
                  <input
                    type="radio"
                    name="campaign-exposure"
                    id="campaign-exposure1"
                    v-model="campaignShowYN"
                    value=""
                  />
                  <label for="campaign-exposure1">적용</label>
                </li>
                <li class="radio-wrap">
                  <input
                    type="radio"
                    name="campaign-exposure"
                    id="campaign-exposure2"
                    v-model="campaignShowYN"
                    value="N"
                  />
                  <label for="campaign-exposure2">적용해제</label>
                </li>
              </ul>
            </td>
          </tr>
          <tr class="board">
            <th>이미지</th>
            <td>
              <ul
                class="campaign-img-list"
                v-for="(file, index) in files"
                :key="index"
              >
                <li>
                  <div class="left-area">
                    <img :src="file.preview" alt="" id="preview-image" />
                  </div>
                  <div class="right-area">
                    <div class="img-updown-btn">
                      <button class="updown-btn" @click="imageup(index)">
                        <img
                          src="../../assets/images/icon/icon-up.svg"
                          alt=""
                        />
                      </button>
                      <button class="updown-btn" @click="imagedown(index)">
                        <img
                          src="../../assets/images/icon/icon-down.svg"
                          alt=""
                        />
                      </button>
                    </div>
                    <div class="img-delete-btn">
                      <button @click="imagedelete(index)">X</button>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="campaign-img-add">
                <input
                  type="file"
                  id="campaign-file"
                  ref="files"
                  @change="imageAddUpload"
                />
                <label for="campaign-file" class="btn-c1 btn-s3 pointer"
                  >이미지 추가</label
                >
              </div>
            </td>
          </tr>
        </table>
      </article>
      <aticle class="btn-box1">
        <a class="btn-c2 btn-s1" href="#" @click="previewShowYN = 1"
          >미리보기</a
        >
        <button class="btn-c1 btn-s1 pointer">저장</button>
      </aticle>
      <Carousel
        :items-to-show="1"
        :wrap-around="true"
        :transition="1200"
        :mouseDrag="true"
        :autoplayHoverPause="false"
        v-if="previewShowYN == 1"
      >
        <slide v-for="(file, index) in files" :key="index">
          <div class="preview-wrap">
            <button class="previewClose" @click="previewShowYN = 0">
              닫기
            </button>
            <img src="../../assets/images/preview-01.png" alt="" />
            <img class="upload" :src="file.preview" alt="" />
          </div>
        </slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </section>
    <!-- <div class="popup">
                    <button><img src="../../assets/images/icon/icon-close1.svg" alt=""></button>
                    <img src="../../assets/images/image1.png" alt="">
                </div> -->
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: function () {
    return {
      campaignTitle: '',
      campaignShowYN: 'Y',
      files: [0], //업로드용 파일
      filesPreview: [],
      uploadImageIndex: 0, // 이미지 업로드를 위한 변수
      previewShowYN: 0,
    };
  },

  methods: {
    campaignTitleValid: function () {
      const re = /[^a-zA-Z0-9ㄱ-힣]/gi;

      if (
        re.test(String(this.campaignTitle)) == 1 ||
        this.campaignTitle.length > 50
      ) {
        alert('1~50자의 한글/영문/숫자만 입력이 가능합니다.');
        this.campaignTitle = '';
      }
      return this.campaignTitle;
    },
    imageAddUpload() {
      let num = -1;
      if (this.files[0] == 0) {
        this.files.splice(0, 1);
      }
      for (let i = 0; i < this.$refs.files.files.length; i++) {
        if (this.uploadImageIndex > 7) {
          alert('최대 8개의 이미지가 추가 가능합니다.');
        } else {
          this.files = [
            ...this.files,
            //이미지 업로드
            {
              //실제 파일
              file: this.$refs.files.files[i],
              //이미지 프리뷰
              preview: URL.createObjectURL(this.$refs.files.files[i]),
              //삭제및 관리를 위한 number
              //number: i + this.uploadImageIndex,
            },
          ];
          num = i;
        }
      }
      this.uploadImageIndex = this.uploadImageIndex + num + 1;
    },
    imageup(index) {
      let temp;
      if (index > 0) {
        temp = this.files[index];
        this.files[index] = this.files[index - 1];
        this.files[index - 1] = temp;
      }
    },
    imagedown(index) {
      let temp;
      if (index + 1 < this.files.length) {
        temp = this.files[index];
        this.files[index] = this.files[index + 1];
        this.files[index + 1] = temp;
      }
    },
    imagedelete(index) {
      this.files.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.campaign-img-list {
  width: 100%;
}
.campaign-img-list li {
  margin: 10px 0;
  min-width: 350px;
  height: 200px;
  margin-right: 40px;
  box-sizing: border-box;
  border: 1px solid var(--black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 20px;
}

.campaign-img-list .right-area .updown-btn {
  width: 50px;
  height: 50px;
  border: 1px solid var(--grey4);
  border-radius: 5px;
  margin: 0 7px;
}

.campaign-img-list .right-area .img-updown-btn {
  display: flex;
  align-items: center;
}
.campaign-img-list .right-area {
  display: flex;
  height: 100%;
}

.campaign-img-list .right-area .updown-btn img {
  width: 100%;
}
.campaign-img-list .right-area .img-delete-btn {
  margin-left: 10px;
}
.campaign-img-list .right-area .img-delete-btn button {
  font-size: 26px;
}
.campaign-img-add {
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  box-sizing: border-box;
}

.left-area {
  height: 100%;
  display: flex;
  align-items: center;
}

.left-area img {
  height: 80%;
}

.carousel {
  width: 300px;
  position: absolute;
  top: 10%;
  left: 40%;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
  background-color: #fff;
  z-index: 100;
  max-height: 100%;
}

.preview-wrap {
  display: flex;
  flex-direction: column;
}
.preview-wrap img {
  width: 100%;
  border: 1px solid rgb(190, 190, 190);
}

.preview-wrap .upload {
  position: absolute;
  width: 100%;
  top: 70px;
  left: 0;
  border: none;
}
.carousel__prev {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0px;
  background: url(../../assets/images/icon/icon-prev.svg);
  background-repeat: no-repeat;
}
.carousel .carousel__next {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 0;
  right: 0px;
  background: url(../../assets/images/icon/icon-next.svg);
  background-repeat: no-repeat;
}
.previewClose {
  padding: 6px 14px;
  background-color: rgba(197, 197, 197, 0.575);
  position: absolute;
  bottom: 0;
  right: 0;
}
.slide-pager button {
  opacity: 0.6;
  transition: 0.5s;
  cursor: pointer;
}
</style>
