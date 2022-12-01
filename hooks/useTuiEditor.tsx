import { Editor } from '@toast-ui/react-editor';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { HookCallback } from '@toast-ui/editor/types/editor';

interface ImgPathType {
  seq?: number;
  path?: string;
  alt?: string;
}

export interface PromiseCbProps {
  localImageUrl: string;
  imgAltName: string;
  cb: HookCallback;
}

interface Props {
  ref: React.RefObject<Editor>;
  callbackReplaceSrc?: ({ localImageUrl, imgAltName, cb }: PromiseCbProps) => Promise<void>;
}

/**
 * Tui...당신이 이렇게 만들었어..
 * 변수명 개대충짯습니다. 리팩이 필요합니다.
 * Tui가 거지같이 만들어서 제어가 불가능합니다
 * 불가피하게 비제어로 만듭니다.
 *  @Param { ref , callbackReplaceSrc} - TuiEditor useRef
 * @returns {previewEl}
 * */
export function useTuiEditor({ ref, callbackReplaceSrc }: Props) {
  const [previewEl, setPreviewEl] = useState<Element | string>();
  const [imgPath, setImgPath] = useState<ImgPathType[]>();
  const imgPathRef = useRef<ImgPathType[]>();
  const [forceRerender, setForceRerender] = useState(false);
  const previweElRef = useRef<Element | string>();

  //입력하다가 이미지 태그 삭제하면 돌아가는 놈
  const onChangeImgDelete = () => {
    const previewEl = ref.current?.getInstance().getEditorElements().mdPreview;
    const convertArr = Array.from(previewEl?.querySelectorAll('img') as NodeListOf<HTMLImageElement>);

    const ArrFilter = convertArr.filter((r) => !imgPathRef.current?.includes({ alt: r.alt }));

    console.log('자 내가 지워볼게 ', convertArr, ArrFilter, imgPathRef.current);

    if (imgPathRef.current) {
      //없어진 img 태그 확인.(Element 리턴)
      const ArrSrcFilter = convertArr.filter((r) => {
        let flag = false;
        imgPathRef.current?.forEach((path) => {
          if (path.alt === r.alt) flag = true;
        });
        return flag;
      });

      const imgPathRefFilter = imgPathRef.current?.filter((r) => {
        let flag = false;
        convertArr.forEach((path) => {
          if (path.alt === r.alt) flag = true;
        });
        return flag;
      });
      console.log('ㅋㅋ...', imgPathRefFilter);

      //벨로그에서는 모든 이미지를 로컬로 저장하는듯 합니다. 남겨두자
      // imgPathRef.current = imgPathRefFilter;
      console.log(imgPathRef, '마참내!!!');

      ArrSrcFilter.forEach((r, idx) => r.setAttribute('src', imgPathRefFilter[idx].path as string));

      console.log('ㅎㅇ ㅎㅇ', ArrFilter, ArrSrcFilter, convertArr);
    }
  };

  //글입력 할 경우 호출되는 엘리먼트.
  const onChangeEditorElement = () => {
    const previewEl = ref.current?.getInstance().getEditorElements().mdPreview;
    const convertArr = Array.from(previewEl?.querySelectorAll('img') as NodeListOf<HTMLImageElement>);

    console.dir(previewEl);
    if (imgPathRef.current && imgPathRef.current?.length !== 0) {
      console.log('ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ너임?', imgPathRef);
      convertArr.forEach((r) => {
        imgPath?.forEach((imgPath, idx) => {
          if (imgPath.alt === previewEl?.querySelectorAll('img')[idx]?.alt) {
            previewEl?.querySelectorAll('img')[idx].setAttribute('src', String(imgPath.path));
            previewEl?.querySelectorAll('img')[idx].setAttribute('id', String(imgPath.seq));
          }
        });
      });
    }
    onChangeImgDelete();

    const resultPrevire = previewEl;

    setPreviewEl(resultPrevire);
    previweElRef.current = resultPrevire;
    setForceRerender((prev) => !prev);
  };

  //이미지 추가
  //src='undefined 되는 부분이 있음 해결해야함. 얘 때문에 다망가짐.'
  const handleAddImageBlobHook = useCallback(
    async (blob: Blob | File, cb: HookCallback) => {
      const blobFile: any = blob;
      const localImageUrl = URL.createObjectURL(blobFile);

      console.log('나좀 봐줘', imgPathRef.current);
      const imgSeq = Math.round(Math.random() * 1000000);
      const imgAltName = blobFile.name + imgSeq;
      cb(localImageUrl, imgAltName);

      const previewEl = ref.current?.getInstance().getEditorElements().mdPreview;
      const convertArr = Array.from(previewEl?.querySelectorAll('img') as NodeListOf<HTMLImageElement>);

      if (!imgPathRef.current) {
        const imgSeq = Math.round(Math.random() * 1000000);
        previewEl?.querySelectorAll('img')[0].setAttribute('src', localImageUrl);
        previewEl?.querySelectorAll('img')[0].setAttribute('id', String(imgSeq));
        console.log(
          '네놈인것이냐 ?? 아닌데요 얘 if 먹히지도 않고 src="undefined"가 추가되는데요?ㅋㅋ 어디서 추가함? 설마 onChage인가? 확인결과 delete를 비활성화 하면 잘 나옴. 수정필요' +
            '현재 잘 되긴 하는데 하나라도 사진 추가하는 순간 배열이 복사가 됨. delte의 48번째 줄 저깃 ㅓ문제임. 텍스트 입력이면 저거 넣지않게? 바꿔야할듯.',
          imgPathRef.current,
        );
        setImgPath([{ seq: imgSeq, path: localImageUrl, alt: imgAltName }]);
        imgPathRef.current = [{ seq: imgSeq, path: localImageUrl, alt: imgAltName }];
        if (callbackReplaceSrc)
          callbackReplaceSrc({ localImageUrl, imgAltName, cb }).then((r) => window.alert(r + 'ㅋㅇㄴㄹㄴㅇㅁㄹㅈㄷ'));
        return;
      }

      //여기서 2개 이상img 가 있을경우 ref 값 변경
      const prevImgPathRef = imgPathRef.current;
      imgPathRef.current = [...prevImgPathRef, { seq: imgSeq, path: localImageUrl, alt: imgAltName }];

      console.log('비뀐거좀 확인할게', imgPathRef.current);

      //이놈 있냐?
      console.log(' 좀', convertArr);
      convertArr.forEach((r) => {
        console.log('새 좀zz', imgPathRef.current);
        imgPathRef.current?.forEach((list, idx) => {
          console.log(' 좀zzz', imgPathRef.current, '알알알', r);
          if (list.alt === previewEl?.querySelectorAll('img')[idx]?.alt) {
            const imgSeq = Math.round(Math.random() * 1000000);
            console.log(' 좀zzzzsszz', imgPathRef.current);
            previewEl?.querySelectorAll('img')[idx].setAttribute('id', String(imgSeq));
            previewEl?.querySelectorAll('img')[idx].setAttribute('src', String(list.path));
          }
        });
      });
      if (callbackReplaceSrc) callbackReplaceSrc({ localImageUrl, imgAltName, cb });

      setImgPath((prev) => {
        if (!prev) return [{ seq: imgSeq, path: localImageUrl, alt: imgAltName }];
        return [...prev, { seq: imgSeq, path: localImageUrl, alt: imgAltName }];
      });
    },
    [imgPath],
  );

  // useEffect(() => {
  //   ref.current?.getRootElement().addEventListener('keydown', (ev) => {
  //     // console.log('키키', ev);
  //     // currentKey.current = ev.key;
  //   });
  //   return () => {
  //     ref.current?.getRootElement().removeEventListener('keydown', () => {});
  //   };
  // }, [ref.current]);

  // if (ref.current) {
  //   const previewEssl = ref.current?.getInstance().getEditorElements().mdPreview;
  //   const convertArr = Array.from(previewEssl?.querySelectorAll('img') as NodeListOf<HTMLImageElement>);
  //   console.log(convertArr, 'zzzz');
  // }
  // console.log(imgPath, '상태왜이럼');

  return [previewEl, handleAddImageBlobHook, onChangeEditorElement];
}
