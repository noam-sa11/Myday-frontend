import { useSelector } from "react-redux"
import { utilService } from "../../../../services/util.service"
import { setDynamicModal } from "../../../../store/actions/system.actions"

export function MemberPicker({ chosenMembers, memberOptions, onUpdate, taskId }) {
    const { fatherId } = useSelector((storeState) => storeState.systemModule.dynamicModal)
    const isPickerOpen = fatherId === `${taskId}-memberPicker`
    const extraMembers = chosenMembers.length - 2


    function onMemberPreviewClick(ev) {
        if (isPickerOpen) {
            setDynamicModal({ isOpen: false, boundingRect: null, type: '', data: {}, fatherId: '' })
        } else {
            setDynamicModal({
                isOpen: true,
                boundingRect: ev.target.getBoundingClientRect(),
                type: 'member picker',
                data: { chosenMembers, memberOptions, onChangeMembers: onUpdate },
                fatherId: `${taskId}-memberPicker`
            })
        }
    }

    return (
        <li onClick={onMemberPreviewClick} className="member-picker person-col">

            {!chosenMembers.length && <img src="https://res.cloudinary.com/dkvliixzt/image/upload/v1704358773/person-empty_zckbtr_wrffbw.svg" />}

            {!!chosenMembers.length && <div className="member-img-container">
                {chosenMembers.map((member, idx) => {
                    return idx < 2 ? member.imgUrl ?
                        <img key={idx} src={member.imgUrl} /> :
                        <span key={idx} className="extra-members-box">{utilService.getFormatName(member.fullname)}</span>
                        :
                        ''
                })}
                {extraMembers > 0 && <span className="extra-members-box">+{extraMembers}</span>}
            </div>
            }
        </li >
    )
}
