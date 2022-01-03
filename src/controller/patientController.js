import patientService from "../service/patientService";
let postBookAppointment = async (req, res) => {
    try {
        let infor = await patientService.postBookAppointment(req.body);
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: "error from the server..",
        });
    }
};
module.exports = {
    postBookAppointment,
};
