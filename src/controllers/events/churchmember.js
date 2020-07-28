import i18n from '../../localization';
import ChurchMember from '../../db/models/churchMember'
import downloadResource from '../../utils/csvHelper';

exports.find = (req, res) => {
    // const id = req.params.id;
    console.log(req.query)
    ChurchMember.findOne({ ...req.query })
        .then(data => {
            console.log(data);

            if (!data)
                res.status(404).send({
                    message: i18n.__('objectNotExists')
                });
            else res.send(data);
        })
        .catch(err => {
            console.log(err);

            res.status(404).send({
                message: i18n.__("objectNotExists")
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    ChurchMember.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({
                    message: i18n.__('objectNotExists')
                });
            else res.send(data);
        })
        .catch(err => {
            res.status(404).send({
                message: i18n.__("objectNotExists")
            });
        });
};
exports.putInfo = async (req, res) => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const members = req.body.data;
    // console.log(req.body);
    let result = [];
    for (var i = 0; i < members.length; i++) {
        const query = { nationalId: members[i].nationalId };
        //  console.log(query);

        result.push(await ChurchMember.findOneAndUpdate(query, { ...members[i] }, options,
            function (error, member) {
                console.log(error, result);

                if (error) return res.status(404).send({
                    message: i18n.__('generalError')
                });;
                return member
                // do something with the document
            }));

    };
    console.log(result);
    return res.send(result);


};
exports.delete = (req, res) => {
    const id = req.params.id;
    ChurchMember.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: i18n.__('objectNotExists')
                })
            }
            res.status(200).send({ message: "Deleted " })
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NoteFound') {
                return res.status(404).send({ message: i18n.__('objectNotExists') })
            }
            return res.status(500).send({ message: i18n.__('generalError') })
        })

}

exports.search = (req, res) => {
    // const id = req.params.id;
    console.log(req.query);
    let createdAtDate = req.query.createDate;
    if (createdAtDate == undefined)
        createdAtDate = new Date().setHours(0, 0, 0, 0);
    else
        createdAtDate = new Date(createdAtDate).setHours(0, 0, 0, 0);

    const exportFields = [
        {
            label: 'Full Name',
            value: 'fullName'
        },
        {
            label: 'National Id',
            value: 'nationalId'
        }, {
            label: 'Mobile',
            value: 'mobile'
        }, {
            label: 'Last Booking',
            value: 'lastBooking'
        }
    ];

    ChurchMember.find({ createdAt: { $gte: createdAtDate } })
        .then(data => {
            console.log(data);

            if (!data)
                res.status(404).send({
                    message: i18n.__('objectNotExists')
                });
            else {
                if (req.query.export == "csv") {

                    console.log("download2");
                    downloadResource(res, 'churchMembers_' + req.query.createDate, exportFields, data);
                } else
                    res.status(200).send(data);
            }
        }
        )
        .catch(err => {
            console.log(err);

            res.status(404).send({
                message: i18n.__("objectNotExists")
            });
        });
};
