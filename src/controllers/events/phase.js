import Joi from 'joi';
import i18n from '../../localization';
import Phase from '../../db/models/phase';

exports.find = (req, res) => {
    Phase.find({ active: true })
        .then(data => {
            if (!data)
                res.status(404).send({
                    message: i18n.__("objectNotExists")
                });
            else res.send(data);
        })
        .catch(err => {
            res.status(404).send({
                message: i18n.__('objectNotExists')
            });
        });
};
exports.update = (req, res) => {
    console.log(req.body);

    const {
        error
    } = validatePhase(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    Phase.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        active: req.body.active
    }, { new: true })
        .then(data => {
            if (!data)
                return res.status(404).send({ message: i18n.__("objectNotExists") })
            res.send(data);
        })
        .catch(err => {
            res.status(404).send({
                message: i18n.__("objectNotExists")
            });
        });
};


exports.create = async (req, res) => {
    console.log(req.body);

    const {
        error
    } = validatePhase(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    const phase = new Phase({
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        active: req.body.active,
    });
    var result = await phase.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.getActivePhase = async () => {
    const phase = await Phase.find({ active: true });
    return phase[0];
};

function validatePhase(phase) {
    const schema = {
        title: Joi.string().required().error(() => {
            return {
                message: i18n.__('tileRequired')
            };
        }),
        startDate: Joi.date().required().error(() => {
            return {
                message: i18n.__('dateRequired')
            };
        }),
        endDate: Joi.date().required().error(() => {
            return {
                message: i18n.__('dateRequired')
            };
        }),
        active: Joi.boolean()

    };

    return Joi.validate(phase, schema);
}