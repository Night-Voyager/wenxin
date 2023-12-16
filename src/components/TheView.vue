<template>
    <el-card>
        <el-row>
            <el-col :span="12">
                <el-upload
                    ref="uploadRef"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :auto-upload="false"
                    drag
                >
                    <el-icon class="el-icon--upload">
                        <upload-filled />
                    </el-icon>
                    <div class="el-upload__text">
                        拖动文件到此处，或<em>点击上传</em>
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
import {genFileId, UploadInstance, UploadProps, UploadRawFile} from "element-plus";

const uploadRef = ref<UploadInstance>();

const handleExceed: UploadProps['onExceed'] = (files) => {
    uploadRef.value!.clearFiles();
    const file = files[0] as UploadRawFile;
    file.uid = genFileId();
    uploadRef.value!.handleStart(file);
};
</script>

<style scoped>

</style>