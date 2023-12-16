<template>
    <el-card>
        <el-row>
            <el-col :span="12">
                <el-upload
                    drag
                    :auto-upload="false"
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

<script setup>
import {UploadFilled} from "@element-plus/icons-vue";
</script>

<style scoped>

</style>