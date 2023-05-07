import React, { useCallback, useMemo } from "react";
// import PropTypes from "prop-types";/
import moment from 'moment'
import { Select, Calendar, Tag, Input } from "antd";

function toValidArray(value) {
    const arr = Array.isArray(value) ? value : [value];

    return arr.filter(e => e != null && e != undefined); // must be ==
}

const MultipleDatePicker = (props) => {
    const {
        onChange = () => { },
        value,
        format = "DD/MM",
        available,
        reqValue = false,
        onChangeReValue = () => { }
    } = props;

    const arrValues = useMemo(() => toValidArray(value), [value]);
    const reqArrValues = useMemo(() => toValidArray(reqValue), [reqValue]);

    const customRenderDate = useCallback(
        current => {

            const day = current.format("DD")


            if (reqArrValues.some(e => current.format("YYYY-MM-DD") == e)) {
                return <div className={"bg-blue-400 text-white m-2"}>{day}</div>;
            }

            if (arrValues.some(e => current.format("YYYY-MM-DD") == e)) {
                return <div className={"bg-green-400 text-white m-2"}>{day}</div>;
            }

            const currentDay = new Date(current.format("YYYY-MM-DD")).getDay();

            if (available === "weekend" && (currentDay == 0 || currentDay == 6)) {
                return <div className={"bg-green-400 text-white m-2"}>{day}</div>;
            }
            if (available === "weekdays" && (currentDay != 0 && currentDay != 6)) {
                return <div className={"bg-green-400 text-white m-2"}>{day}</div>;
            }
            if (available === "everyday") {
                return <div className={"bg-green-400 text-white m-2"}>{day}</div>;
            }
            if (available === "not") {
                return <div className={"bg-red-400 text-white m-2"}>{day}</div>;
            }


            return <div className="m-2">{day}</div>;
        },
        [arrValues, reqArrValues, available]
    );

    const renderTag = useCallback(
        ({ value, onClose }) => {
            return (
                <Tag onClose={onClose} closable>
                    {moment(value).format('DD/MM')}
                </Tag>
            );
        },
        [format]
    );

    const _onChange = useCallback(
        selected => {
            const index = arrValues.findIndex(e => selected.format("YYYY-MM-DD") == e);

            // console.log('selected', moment(selected.format("YYYY-DD-MM")).day())

            const temp = [...arrValues];

            if (index !== -1) {
                temp.splice(index, 1);
            } else {

                // temp.push(selected);
                temp.push(selected.format("YYYY-MM-DD"));
            }

            onChange(temp);
        },
        [arrValues, onChange]
    );
    const _onChangeReqValue = useCallback(
        selected => {
            const index = reqArrValues.findIndex(e => selected.format("YYYY-MM-DD") == e);

            // console.log('selected', moment(selected.format("YYYY-DD-MM")).day())

            const temp = [...reqArrValues];

            if (index !== -1) {
                temp.splice(index, 1);
            } else {

                // temp.push(selected);
                temp.push(selected.format("YYYY-MM-DD"));
            }

            onChangeReValue(temp);
        },
        [reqArrValues, onChangeReValue]
    );

    const onDeselect = useCallback(
        oldSelect => {
            const newVal = arrValues.filter(e => !e.isSame(oldSelect));
            onChange(newVal);
        },
        [arrValues, onChange]
    );

    return (
        <>

            <div className={"calendar dark:bg-zinc-800 "}>
                {
                    reqValue ?
                        <Calendar
                            fullscreen={false}
                            fullCellRender={customRenderDate}
                            onSelect={_onChangeReqValue}
                        />
                        :
                        <Calendar
                            fullscreen={false}
                            fullCellRender={customRenderDate}
                            onSelect={_onChange}
                        />
                }

            </div>
        </>
    );
};

export default MultipleDatePicker;
