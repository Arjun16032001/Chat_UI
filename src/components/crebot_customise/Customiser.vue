<template>
  <div class="flex flex-col justify-between gap-[25px]">
    <div class="flex flex-row gap-4">
      <Button
        @click="backDash"
        icon="pi pi-angle-left"
        severity="success"
        rounded
        aria-label="Search"
        :pt="{
          root: '!bg-[#CEE993] !text-[black] !border-[#CEE993]',
          icon: '!text-[29px]',
        }"
      />
      <p class="text-[20px] font-[600] p-[5px]">Create Chat bot</p>
    </div>
    <form class="gap-4">
      <input
        type="text"
        name=""
        id=""
        placeholder="Bot name"
        class="border-[2px] border-[#A2A1A8] rounded-[6px] h-[36px] w-full pl-[25px]"
      /><br /><br />
      <p>Theme Color</p>
      <div class="flex flex-row gap-4">
        <button
          class="flex border-[1px] w-[35px] h-[35px] rounded-[9px] overflow-hidden"
        >
          <div class="w-1/2 h-full bg-[#417EE3]"></div>
          <div class="w-1/2 h-full bg-[#FD9134]"></div>
        </button>
        <button
          class="flex border-[1px] w-[35px] h-[35px] rounded-[9px] overflow-hidden"
        >
          <div class="w-1/2 h-full bg-[#EC0EFF]"></div>
          <div class="w-1/2 h-full bg-[#00B9E2]"></div>
        </button>
        <div class="relative inline-block">
          <ColorPicker
            v-model="color"
            :pt="{ preview: '!w-[35px] !h-[35px]' }"
          />
          <span
            class="absolute inset-0 flex items-center justify-center text-white pointer-events-none"
          >
            <i class="pi pi-pencil"></i>
          </span>
        </div>
      </div>
      <br />
      <div
        class="flex flex-col rounded-[6px] border-[1.5px] border-[#7152F3] px-[16px] py-[7px]"
      >
        <p class="text-[11px] font-[300] leading-[16px] text-[#7152F3]">
          Welcome message
        </p>
        <p class="text-[14px] font-[500] leading-[22px]">Welcome!</p>
        <p class="text-[14px] font-[500] leading-[22px]">
          I’m your virtual assistant, I'm here to help you understand how Zia
          integrates with OpenAI for Zoho. This integration is about helping
          businesses become more efficient, effective, and competitive. We're
          looking forward to making this easier for you.
        </p>
      </div>
      <br />
      <div class="flex flex-col">
        <p class="text-[14px] font-[400] leading-[22px]">Upload app Icon</p>
        <FileUpload
          name="demo[]"
          url="/api/upload"
          @upload="onTemplatedUpload($event)"
          :multiple="true"
          accept="image/*"
          :maxFileSize="1000000"
          @select="onSelectedFiles"
          :pt="{
            root: '!p-0 !border-none',
            header: '!p-0',
            content: '!p-0',
          }"
          
        >
          <template
            #header="{ chooseCallback, uploadCallback, clearCallback, files }"
          >
                <Button
                  @click="chooseCallback()"
                  severity="secondary"
                  class="flex flex-col !border-[1px] !rounded-[4px] !p-[0px] !bg-[#f8f8ff] !border-[#384EB74D] !border-dotted !px-[56px] !py-[14px] w-full"
                ><div class="flex flex-row">
                    <p class="text-black text-[16px] font-[700]">Drag & drop files or </p>&nbsp;
                    <p class="text-[#7152F3] text-[16px] font-[700]">Browse</p>
                </div>
                <p class="text-[#676767] text-[12px] font-[400]">Supported formates: JPEG, PNG</p>           
            </Button>
                <!-- <Button
                  @click="uploadEvent(uploadCallback)"
                  icon="pi pi-cloud-upload"
                  rounded
                  outlined
                  severity="success"
                  :disabled="!files || files.length === 0"
                ></Button>
                <Button
                  @click="clearCallback()"
                  icon="pi pi-times"
                  rounded
                  outlined
                  severity="danger"
                  :disabled="!files || files.length === 0"
                ></Button> -->
              
              <!-- <ProgressBar
                :value="totalSizePercent"
                :showValue="false"
                class="md:w-20rem h-1 w-full md:ml-auto"
              >
                <span class="whitespace-nowrap">{{ totalSize }}B / 1Mb</span>
              </ProgressBar> -->
          </template>
          <!-- <template
            #content="{
              files,
              uploadedFiles,
              removeUploadedFileCallback,
              removeFileCallback,
              messages,
            }"
          >
            <div class="flex flex-col gap-8 pt-4">
              <Message
                v-for="message of messages"
                :key="message"
                :class="{ 'mb-8': !files.length && !uploadedFiles.length }"
                severity="error"
              >
                {{ message }}
              </Message>

              <div v-if="files.length > 0">
                <h5>Pending</h5>
                <div class="flex flex-wrap gap-4">
                  <div
                    v-for="(file, index) of files"
                    :key="file.name + file.type + file.size"
                    class="p-8 rounded-border flex flex-col border border-surface items-center gap-4"
                  >
                    <div>
                      <img
                        role="presentation"
                        :alt="file.name"
                        :src="file.objectURL"
                        width="100"
                        height="50"
                      />
                    </div>
                    <span
                      class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden"
                      >{{ file.name }}</span
                    >
                    <div>{{ formatSize(file.size) }}</div>
                    <Badge value="Pending" severity="warn" />
                    <Button
                      icon="pi pi-times"
                      @click="
                        onRemoveTemplatingFile(file, removeFileCallback, index)
                      "
                      outlined
                      rounded
                      severity="danger"
                    />
                  </div>
                </div>
              </div>

              <div v-if="uploadedFiles.length > 0">
                <h5>Completed</h5>
                <div class="flex flex-wrap gap-4">
                  <div
                    v-for="(file, index) of uploadedFiles"
                    :key="file.name + file.type + file.size"
                    class="p-8 rounded-border flex flex-col border border-surface items-center gap-4"
                  >
                    <div>
                      <img
                        role="presentation"
                        :alt="file.name"
                        :src="file.objectURL"
                        width="100"
                        height="50"
                      />
                    </div>
                    <span
                      class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden"
                      >{{ file.name }}</span
                    >
                    <div>{{ formatSize(file.size) }}</div>
                    <Badge value="Completed" class="mt-4" severity="success" />
                    <Button
                      icon="pi pi-times"
                      @click="removeUploadedFileCallback(index)"
                      outlined
                      rounded
                      severity="danger"
                    />
                  </div>
                </div>
              </div>
            </div>
          </template> -->
          <!-- <template #empty>
            <div class="flex items-center justify-center flex-col">
              <i
                class="pi pi-cloud-upload !border-2 !rounded-full !p-8 !text-4xl !text-muted-color"
              />
              <p class="mt-6 mb-0">Drag and drop files to here to upload.</p>
            </div>
          </template> -->
        </FileUpload>
      </div><br>
      <button class="border-[1px] rounded-[10px] bg-[#CEC4F6] py-[8px] w-full text-[#7152F3] text-[16px] font-[500]">Excel import</button><br><br>
      <button class="border-[1px] rounded-[10px] bg-[#CEC4F6] py-[8px] w-full text-[#7152F3] text-[16px] font-[500]">Excel export</button>

    </form>
  </div>
</template>
<script setup>
import Button from "primevue/button";
import ColorPicker from "primevue/colorpicker";
import { useRouter } from "vue-router";
import FileUpload from "primevue/fileupload";
import { ref } from 'vue';
import { usePrimeVue } from 'primevue/config';
import { useToast } from "primevue/usetoast";

const router = useRouter();

function backDash() {
  router.push("/");
}

const $primevue = usePrimeVue();
const toast = useToast();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
    removeFileCallback(index);
    totalSize.value -= parseInt(formatSize(file.size));
    totalSizePercent.value = totalSize.value / 10;
};

const onClearTemplatingUpload = (clear) => {
    clear();
    totalSize.value = 0;
    totalSizePercent.value = 0;
};

const onSelectedFiles = (event) => {
    files.value = event.files;
    files.value.forEach((file) => {
        totalSize.value += parseInt(formatSize(file.size));
    });
};

const uploadEvent = (callback) => {
    totalSizePercent.value = totalSize.value / 10;
    callback();
};

const onTemplatedUpload = () => {
    toast.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3000 });
};

const formatSize = (bytes) => {
    const k = 1024;
    const dm = 3;
    const sizes = $primevue.config.locale.fileSizeTypes;

    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
};
</script>
