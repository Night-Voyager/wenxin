<template>
    <el-card>
        <el-row>
            <el-col :span="12">
                <el-upload
                    v-model:file-list="fileList"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :on-change="handleChange"
                    :auto-upload="false"
                    drag
                >
                    <div v-if="fileList.length == 0">
                        <el-icon class="el-icon--upload">
                            <upload-filled />
                        </el-icon>
                        <div class="el-upload__text">
                            拖动文件到此处，或<em>点击上传</em>
                        </div>
                    </div>
                    <div v-else>
                        <el-image :src="fileUrl" />
                    </div>
                </el-upload>
            </el-col>

            <el-col :span="12">
                <el-skeleton />
            </el-col>
        </el-row>
    </el-card>
</template>

<script setup lang="ts">
import {UploadFilled} from "@element-plus/icons-vue";
import {ref} from "vue";
import {genFileId, UploadUserFile, UploadProps, UploadRawFile} from "element-plus";

const fileList = ref<UploadUserFile[]>([]);
const fileUrl = ref('');

const handleExceed: UploadProps['onExceed'] = (files) => {
    fileList.value = [];
    const file = files[0] as UploadRawFile;
    file.uid = genFileId();
    fileList.value.push(file);
    fileUrl.value = URL.createObjectURL(file);
};

const handleChange: UploadProps['onChange'] = (uploadFile) => {
    fileUrl.value = URL.createObjectURL(uploadFile.raw);
};
</script>

<style scoped>

</style>