//file web nay la router
import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
import doctorController from "../controller/doctorController";
import patientController from "../controller/patientController";
import specialtyController from "../controller/specialtyController";
let router = express.Router();
let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    router.get("/crud", homeController.getCRUD);
    router.post("/post-crud", homeController.postCRUD);
    router.get("/get-crud", homeController.displayGetCRUD);
    router.get("/edit-crud", homeController.getEditCRUD);
    router.post("/put-crud", homeController.putCRUD); //
    router.get("/delete-crud", homeController.deleteCRUD); //xoa user

    router.post("/api/login", userController.handleLogin); //dang nhap
    router.get("/api/get-all-users", userController.handleGetAllUser); //dang nhap
    router.post("/api/create-new-user", userController.handleCreatNewUser);
    router.put("/api/edit-user", userController.handleEditNewUser);
    router.delete("/api/delete-user", userController.handleDeleteNewUser);

    router.get("/api/allcode", userController.getAllCode);

    router.get("/api/top-doctor-home", doctorController.getTopDoctorHome);

    router.get("/api/get-all-doctors", doctorController.getAllDoctors);
    router.post("/api/save-infor-doctors", doctorController.postInforDoctor);
    router.get(
        "/api/get-detail-doctor-by-id",
        doctorController.getDetailDoctorById
    );
    router.post(
        "/api/bulk-create-schedule",
        doctorController.bulkCreateSchedule
    );
    router.get(
        "/api/get-schedule-doctor-by-date",
        doctorController.getScheduleByDate
    );
    router.get(
        "/api/get-extra-infor-doctor-by-id",
        doctorController.getExtraInforDoctorById
    );
    router.get(
        "/api/get-profile-doctor-by-id",
        doctorController.getProfileDoctorById
    );

    router.post(
        "/api/patient-book-appointment",
        patientController.postBookAppointment
    );
    router.post(
        "/api/verify-book-appointment",
        patientController.postVerifyBookAppointment
    );
    router.post(
        "/api/create-new-specialty",
        specialtyController.createSpecialty
    );
    router.get("/api/get-specialty", specialtyController.getAllSpecialty);
    router.get(
        "/api/get-detail-specialty-by-id",
        specialtyController.getDetailSpecialtyById
    );

    return app.use("/", router);
};
module.exports = initWebRoutes;
